{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
    flake-parts.url = "github:hercules-ci/flake-parts";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    treefmt-nix.inputs.nixpkgs.follows = "nixpkgs";
    flake-root.url = "github:srid/flake-root";
    mission-control.url = "github:Platonic-Systems/mission-control";
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;
      imports = [
        inputs.treefmt-nix.flakeModule
        inputs.flake-root.flakeModule
        inputs.mission-control.flakeModule
      ];
      perSystem = { self', system, lib, config, pkgs, ... }: {
        # Auto formatters. This also adds a flake check to ensure that the
        # source tree was auto formatted.
        treefmt.config = {
          inherit (config.flake-root) projectRootFile;
          package = pkgs.treefmt;
          programs.nixpkgs-fmt.enable = true;
        };

        # Dev shell scripts.
        mission-control.scripts = {
          fmt = {
            description = "Format the source tree";
            exec = config.treefmt.build.wrapper;
          };
          run = {
            description = "Run the dev server";
            exec = ''
              npm start
            '';
          };
          build = {
            description = "Build the static site";
            exec = ''
              npm run build
            '';
          };
        };

        # Default shell.
        devShells.default = pkgs.mkShell {
          name = "haskell-template";
          # See https://haskell.flake.page/devshell#composing-devshells
          inputsFrom = [
            config.flake-root.devShell
            config.mission-control.devShell
            config.treefmt.build.devShell
          ];
          nativeBuildInputs = [
            pkgs.nodejs
          ];
        };
      };
    };
}
