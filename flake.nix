{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
    flake-parts.url = "github:hercules-ci/flake-parts";
    treefmt-nix.url = "github:numtide/treefmt-nix";
    treefmt-nix.inputs.nixpkgs.follows = "nixpkgs";
    flake-root.url = "github:srid/flake-root";
    mission-control.url = "github:Platonic-Systems/mission-control";

    # Flake modules containing their documentation that will be rendered by our
    # site.
    haskell-flake.url = "github:srid/haskell-flake";
    haskell-flake.flake = false;
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;
      imports = [
        inputs.treefmt-nix.flakeModule
        inputs.flake-root.flakeModule
        inputs.mission-control.flakeModule
      ];
      flake = {
        flakePartModuleDocs = {
          haskell-flake = inputs.haskell-flake + /doc;
        };
        flakePartModuleDocsLocalOverrides = {
          # haskell-flake = "$HOME/code/haskell-flake/doc";
        };
      };
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
          shellHook = ''
            echo "Symlinking flake inputs:"
            set -x
            ${
              lib.concatStringsSep "\n" (lib.mapAttrsToList (k: v: ''
                rm -f $FLAKE_ROOT/docs/modules/${k}
                ln -sf ${v} $FLAKE_ROOT/docs/modules/${k}
              '') (inputs.self.flakePartModuleDocs // inputs.self.flakePartModuleDocsLocalOverrides))
            }
            set +x
          '';
          nativeBuildInputs = [
            pkgs.nodejs
          ];
        };
      };
    };
}
