---
description: Introduction to simplifying haskell development with nix.
slug: nixify-haskell-project-intro
authors: shivaraj-bh
tags: [haskell, basics, flakes, nix]
hide_table_of_contents: false
---
# Nixify your haskell project: Introduction

The purpose of this blog posts series is to simplify Haskell development workflow for you. In this post we will introduce [Nix](https://nixos.org/) as solution to this. Nix is a powerful package manager and build system that provides reproducible and declarative development environment. We will utilize [Nix flakes](https://nixos.wiki/wiki/Flakes) [^1] to declaratively configure this environment[^2]. If you're unfamiliar with Nix, we have [a quick introduction](https://zero-to-flakes.com/nix-rapid) available to help you get started quickly or you can take your time and explore it at [Zero to Nix](https://zero-to-nix.com). A basic understanding of the Nix expression language is assumed. Throughout the series, we will utilize a simple Haskell app called [todo-app](https://github.com/juspay/todo-app/tree/903c769d4bda0a8028fe3775415e9bdf29d80555) to illustrate how to build a Haskell project and automatically manage runtime dependencies such as databases (ie., [postgres](https://www.postgresql.org)) and and other services (here, we use [postgREST](https://postgrest.org/en/stable)), eliminating the need for any manual onboarding setup. This will allow us to highlight the advantages of using Nix.

[^1]: We strongly recommend flakes for anyone getting started with Nix. Flakes is production ready despite being marked as experimental. 
[^2]: The Haskell infrastructure in [nixpkgs](https://github.com/nixos/nixpkgs) is the simplest way to get started with Nixifying a Haskell project. There are also other approaches (like [haskell.nix](https://github.com/input-output-hk/haskell.nix), [stacklock2nix](https://github.com/cdepillabout/stacklock2nix)). Later in the blog post series, we'll explore [haskell-flake](https://github.com/srid/haskell-flake) which builds on top of the Haskell infrastructure in nixpkgs
## Why Nixify?

Why use Nix to develop a Haskell project rather than something like Stack or GHCup?

- **Instant onboarding**: Projects have READMEs that describe how to setup the development environment but these instructions do not work the same way for 
every developer and usually takes hours or days to setup. With Nix the setup is instantaneous and reproducible,[^3] which means any new developer
can get the development environment up and running with one command.
- **Enhanced productivity**: More time spent on writing Haskell as Nix gives a fully working development environment with `nix develop`.
- **Multi-platform**: Same configuration generally works on macOS,[^4] Linux and WSL.

[^3]: Considering the packages are available in Nix for the host platform.
[^4]: Although macOS doesn't have first-class support in nixpkgs, [it is getting there](https://github.com/NixOS/nixpkgs/issues/116341).

The rest of this blog post will provide a step-by-step demonstration of how to Nixify the todo-app project.


## Introduce Flake

To begin, clone the [todo-app](https://github.com/juspay/todo-app/tree/903c769d4bda0a8028fe3775415e9bdf29d80555) repository and checkout the specified commit.

```sh
git clone https://github.com/juspay/todo-app.git
cd todo-app
git checkout 076185e34f70e903b992b597232bc622eadfcd51
```

Next, in the project's root directory, create a file named `flake.nix` and run `git add flake.nix` (Nix searches for `flake.nix` in git files). We will begin by setting up a basic template for the flake, which includes:
- Defining `inputs` and `outputs`
- Specifying the `system` corresponding to your machine.

Tl;dr This is how your `flake.nix` will look:

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };
  outputs = { self, nixpkgs }:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      packages.${system}.default = pkgs.hello;
      apps.${system}.default = {
        type = "app";
        program = "${pkgs.hello}/bin/hello";
      };
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.hello
        ];
      };
    };
}
```
A nix flake such as the one above consumes certain `inputs` and produces certain `outputs`. Let's break down each part of this `flake.nix`:

### Inputs [^5]

[^5]: There are two ways to access the attributes of `inputs` within `outputs`:
      - Adding the attribute as a parameter to `outputs`, like `outputs = { self, <attribute> }`. This allows you to use the `<attribute>` without requiring any prefix. 
      - Bind a variable to all the parameters of `outputs`, like `outputs = inputs@{self, ...}`. This enables you to access any attribute from `inputs` in this fashion: `inputs.<attribute>`.
[^6]: `nixpkgs-unstable` branch is named as such because of the frequent updates it receives and doesn't imply that it is unsafe.
[^7]: `self` refers to the final state of attributes in the `outputs`. For example, `self.packages.${system}.default` refers to the attribute after assigning `pkgs.hello` to it.

A flake can reference other flakes, which are specified in the `inputs` attribute. We will use the [URL-like representation](https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html#url-like-syntax) to specify our input flakes.

In this example, we will use [GNU hello](https://www.gnu.org/software/hello) package from [`nixpkgs`](https://github.com/NixOS/nixpkgs) flake. Therefore, we'll specify the nixpkgs flake as an input, specifically using its `nixpkgs-unstable`[^6] branch. 

### Outputs

The `outputs` attribute of a flake is essentially a Nix function that takes inputs and returns the outputs attribute. 

The inputs argument is an attrset containing `self`[^7] as well as the flake inputs (in our flake, we reference the only input `nixpkgs`). [Refer here](https://nixos.wiki/wiki/Flakes#Output_schema) for a detailed schema of `outputs`. Note that the `nixpkgs` key within the inputs attrset refers to the `outputs` of the `flake.nix` located at `nixpkgs.url`. If `nixpkgs.flake = false` is set, then the parameter will represent the source code. 

The body of the function defines the flake outputs. Within the `let` block we define two values -- `system` (set as "aarch64-darwin" in this example, assuming we are on an ARM mac) and `pkgs` (referring to nixpkgs packages for `system`). In our example, `system` is hardcoded to a single system, but [forAllSystems](https://zero-to-nix.com/concepts/flakes#system-specificity) can be used to define packages for an array of systems.

Here are some standard outputs a flake may produce:

#### Packages

- A flake's `packages.${system}` output contains [derivations](https://nixos.org/manual/nix/stable/language/derivations.html) that can be utilized to build the package.
- Executing `nix build` will build the `packages.${system}.default` output. Run `nix build .#<packageName>` to build the package named `packages.${system}.<packageName>`.

#### Apps

- A flake's `apps.${system}.<appName>` output refers to a flake app that can be exeucted using `nix run`. 
  - It is attribute set containing two keys `type` and `program`. The `type` attribute determines how the program should be executed. For instance, "shell" indicates a shell script, "python" indicates a Python script, and "app" indicates an executable. The `program` attribute is a string representing the path in the Nix store where the executable is located.
- Executing `nix run` will run the `apps.${system}.default` app. Run `nix run .#<appName>` to run the app named `<appName>`.

#### DevShells

- By utilizing `pkgs.mkShell`, you can configure your development shell to include only the necessary packages.
- `pkgs.mkShell` generates a derivation that is evaluated when running the `nix develop` command.
- By default the derivation specified by `devShells.${system}.default` is evaluated. However, you also have the flexibility to define a custom development shell, such as `devShells.${system}.mydevShell` and execute it using `nix develop .#mydevShell`

#### Visualize the flake outputs

- Run `nix flake show`[^8]

Here's how it will look:
```
├───apps
│   └───aarch64-darwin
│       └───default: app
├───devShells
│   └───aarch64-darwin
│       └───default: development environment 'nix-shell'
└───packages
    └───aarch64-darwin
        └───default: package 'hello-2.12.1'
```
[^8]: Run `nix flake show --allow-import-from-derivation` in the further sections as `callCabal2nix` relies on [IFD](https://nixos.wiki/wiki/Import_From_Derivation)
#### See the flake in action
[![asciicast](https://asciinema.org/a/591420.svg)](https://asciinema.org/a/591420)

## Nixify Haskell package

In the previous section we wrote a hello world flake that contains the "hello" package. Now, let's write a flake for our Haskell project `todo-app`.

Tl;dr Here is the `flake.nix` for this section:

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };
  outputs = { self, nixpkgs }:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
      overlay = final: prev: {
        todo-app = final.callCabal2nix "todo-app" ./. { };
      };
      myHaskellPackages = pkgs.haskellPackages.extend overlay;
    in
    {
      packages.${system}.default = myHaskellPackages.todo-app;
      apps.${system}.default = {
        type = "app";
        program = "${self.packages.${system}.default}/bin/todo-app";
      };
    };
}
```
Let's break it down!
### haskellPackages

Consult [the official manual](https://nixos.org/manual/nixpkgs/unstable/#haskell) to learn more about the Haskell infrastructure in nixpkgs, but for the purpose of our blog post it is suffice to know that:

- `pkgs.haskellPackages` is an attribute set that contains all Haskell packages maintained within `nixpkgs`.
- Since our local package (`todo-app`) is not already included in `pkgs.haskellPackages`, we need to manually add it.
- Technically, you can use `packages.${system}.default = pkgs.${system}.haskellPackages.callCabal2nix "todo-app" ./. { };` to include the package. However, adding it to `haskellPackages` consolidates every Haskell package in one place. 

In summary, adding the local package to `pkgs.haskellPackages` centralizes the package management process and simplifies the usage of the package within other flakes.

### Overlay

[Overlays](https://nixos.wiki/wiki/Overlays) are used to override an existing package set, such as `pkgs.haskellPackages`, and produce a new package set containing the changes. These changes could be either about overriding a single package in the package set (the second argument `super` references the original package set), or it could be about adding new packages to it. 

### callCabal2nix

The `callCabal2nix` function generates a Haskell package derivation based on its source. This function internally utilizes ["cabal2nix"](https://github.com/NixOS/cabal2nix), which is a Haskell utility that generates Nix build instructions from a cabal file.


### Time to run!
[![asciicast](https://asciinema.org/a/591422.svg)](https://asciinema.org/a/591422)

## Nixify DevShell

Our existing flake enables us to *build* the `todo-app`. However, what if want to develop it, by adding a feature or fixing a bug? For Haskell development, we normally use [cabal](https://cabal.readthedocs.io/) and tools like [ghcid](https://github.com/ndmitchell/ghcid). These tools require a GHC environment that includes the packages specified in the `build-depends` of our cabal file. This is where `devShell` becomes useful as it provides an isolated environment with all packages required by the project, catering to our development needs.

Tl;dr Here is the `flake.nix` for this section:

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };
  outputs = { self, nixpkgs }:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
      overlay = final: prev: {
        todo-app = final.callCabal2nix "todo-app" ./. { };
      };
      myHaskellPackages = pkgs.haskellPackages.extend overlay;
    in
    {
      devShells.${system}.default = myHaskellPackages.shellFor {
        packages = p : [
          p.todo-app
        ];
        buildInputs = with myHaskellPackages; [
          ghcid
          cabal-install
        ];
      };
    };
}
```

### shellFor

- In the above flake, we utilize the [`shellFor`](https://nixos.wiki/wiki/Haskell#Using_shellFor_.28multiple_packages.29) function from the `haskellPackages` attribute set to set up the default shell for our project. 
- `shellFor` is an abstraction over [`mkShell`](https://ryantm.github.io/nixpkgs/builders/special/mkshell/) geared specifically for Haskell development shells. Generally, we only need to define two keys `packages` and `nativeBuildInputs`. `packages` marks which of the packages in the package set are *local* packages (to be compiled by cabal). `nativeBuildInputs` is used to ensure that the specified packages are present in the `PATH` of the isolated development environment.

### Let's run!
[![asciicast](https://asciinema.org/a/591426.svg)](https://asciinema.org/a/591426)

## Nixify external dependencies

Up until now, we have nixified the Haskell portion of our project. However, a project can also have non-Haskell dependencies, like Postgres, MySQL and Redis. In this section we will specifically look at how you can start a postgres server using Nix without relying or mutating global state (outside of project directory).

Tl;dr Here's the `flake.nix`:

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };
  outputs = { self, nixpkgs }:
  let
    system = "aarch64-darwin";
    pkgs = nixpkgs.legacyPackages.${system};
  in
  {
    apps.${system}.postgres = {
      type = "app";
      program = 
        let
          script = pkgs.writeShellApplication {
            name = "pg_start";
            runtimeInputs = [ pkgs.postgresql ];
            text = 
            ''
              # Initialize a database with data stored in current project dir
              [ ! -d "./data/db" ] && initdb --no-locale -D ./data/db

              postgres -D ./data/db -k "$PWD"/data
            '';
          };
        in "${script}/bin/pg_start";
    };
  };
}
```
### writeShellApplication

- The [`writeShellApplication`](https://noogle.dev/?selected=%22build-support.trivial-builders.writeShellApplication%22&term=%22writeShellApplication%22) function generates a derivation for a shell script specified as the value for `text` attribute. 
- `runtimeInputs`: packages to be made available to the shell application's PATH.
- `writeShellApplication` uses [shellcheck](https://github.com/koalaman/shellcheck) to statically analyze your bash script for issues.
- `"${script}"` provides the path in the `nix/store` where the application is located.

### Run it!
[![asciicast](https://asciinema.org/a/591427.svg)](https://asciinema.org/a/591427)

## Nixify Combined

Now it's time to consolidate all the previously discussed sections into a single `flake.nix`. Additionally, we should incorporate the necessary apps for `postgrest` and `createdb`. `postgrest` app will start the service and `createdb` will handle tasks such as loading the database dump, creating a database user, and configuring the database for postgREST.

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };
  outputs = { self, nixpkgs }:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
      overlay = final: prev: {
        todo-app = final.callCabal2nix "todo-app" ./. { };
      };
      myHaskellPackages = pkgs.haskellPackages.extend overlay;
    in
    {
      packages.${system}.default = myHaskellPackages.todo-app;

      devShells.${system}.default = myHaskellPackages.shellFor {
        packages = p: [
          p.todo-app
        ];
        buildInputs = with myHaskellPackages; [
          ghcid
          cabal-install
          haskell-language-server
        ];
      };

      apps.${system} = {
        default = {
          type = "app";
          program = "${self.packages.${system}.default}/bin/todo-app";
        };
        postgres = {
          type = "app";
          program =
            let
              script = pkgs.writeShellApplication {
                name = "pg_start";
                runtimeInputs = [ pkgs.postgresql ];
                text =
                  ''
                    # Initialize a database with data stored in current project dir
                    [ ! -d "./data/db" ] && initdb --no-locale -D ./data/db

                    postgres -D ./data/db -k "$PWD"/data
                  '';
              };
            in
            "${script}/bin/pg_start";
        };
        createdb = {
          type = "app";
          program =
            let
              script = pkgs.writeShellApplication {
                name = "createDB";
                runtimeInputs = [ pkgs.postgresql ];
                text =
                  ''
                    # Create a database of your current user
                    if ! psql -h "$PWD"/data -lqt | cut -d \| -f 1 | grep -qw "$(whoami)"; then
                      createdb -h "$PWD"/data "$(whoami)"
                    fi

                    # Load DB dump
                    psql -h "$PWD"/data < db.sql

                    # Create configuration file for postgrest
                    echo "db-uri = \"postgres://authenticator:mysecretpassword@localhost:5432/$(whoami)\"
                    db-schemas = \"api\"
                    db-anon-role = \"todo_user\"" > data/db.conf
                  '';
              };
            in
            "${script}/bin/createDB";
        };
        postgrest = {
          type = "app";
          program =
            let
              script = pkgs.writeShellApplication {
                name = "pgREST";
                runtimeInputs = [ myHaskellPackages.postgrest ];
                text =
                  ''
                    postgrest ./data/db.conf
                  '';
              };
            in
            "${script}/bin/pgREST";
        };
      };
    };
}
```
For the complete souce code, visit [here](https://github.com/juspay/todo-app/tree/tutorial/1). It's worth noting that the source code uses [`forAllSystems`](https://zero-to-nix.com/concepts/flakes#system-specificity), which was not included in the tutorial above to maintain simplicity.

### Video Walkthrough
[![asciicast](https://asciinema.org/a/591435.svg)](https://asciinema.org/a/591435)

## Conclusion

Let's see how the blog post addresses the points from the section [Why Nixify?](#why-nixify) 
- **Instant onboarding**: There is no confusion about how to setup the development environment. It is `nix run .#postgres` to start the postgres server,
`nix run .#createdb` to setup the database and `nix run .#postgrest` to start the Postgrest web server. This happens in a reproducible way, ensuring every
developer gets the same environment.
- **Enhanced productivity**: The commands mentioned in the previous points in conjunction with `nix develop` is all that is needed to make a quick change
and see it in effect.
- **Multi-platform**: All the commands mentioned in the previous points will work in the same way across platforms.

In the next blog post, we will modularize this `flake.nix` using the [`flake-parts`](https://flake.parts/) framework by Robert Hensing.

## Credits
- After going through numerous iterations, I am grateful to [srid](https://srid.ca/) for their valuable assistance in bringing this blog to its current stage.
- I would also like to thank the following folks for their valuable feedback:
  - [cdepillabout](https://github.com/cdepillabout)
  - [Hao Liu](https://github.com/leomayleomay)
