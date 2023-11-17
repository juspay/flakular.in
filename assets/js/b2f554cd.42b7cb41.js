"use strict";(self.webpackChunkflakular=self.webpackChunkflakular||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"nixify-haskell-project-intro","metadata":{"permalink":"/blog/nixify-haskell-project-intro","source":"@site/blog/nixify_your_haskell_project/2023-09-08-Introduction.mdx","title":"Nixify your haskell project: Introduction","description":"Using Nix to setup the haskell development workflow along with services that it depends on.","date":"2023-09-08T00:00:00.000Z","formattedDate":"September 8, 2023","tags":[{"label":"haskell","permalink":"/blog/tags/haskell"},{"label":"basics","permalink":"/blog/tags/basics"},{"label":"flakes","permalink":"/blog/tags/flakes"},{"label":"nix","permalink":"/blog/tags/nix"}],"readingTime":12.17,"hasTruncateMarker":false,"authors":[{"name":"Shivaraj B H","title":"Engineer@Juspay","url":"https://github.com/shivaraj-bh","imageURL":"https://github.com/shivaraj-bh.png","key":"shivaraj-bh"}],"frontMatter":{"description":"Using Nix to setup the haskell development workflow along with services that it depends on.","slug":"nixify-haskell-project-intro","authors":"shivaraj-bh","tags":["haskell","basics","flakes","nix"],"hide_table_of_contents":false}},"content":"import AsciinemaWidget from \'../../src/components/AsciinemaWidget\';\\n\\n\\nThis is the start of a series of blog posts aimed at simplifying Haskell development & packaging workflow using [Nix](https://nixos.org/). In this post, we begin the series by nixifying a Haskell application that uses PostgreSQL database and package it for end-users to run with one command.\\n\\nNix is a powerful package manager and build system that provides reproducible and declarative development environment. We will utilize [Nix flakes](https://nixos.wiki/wiki/Flakes) to declaratively configure this environment.\\n\\n:::note\\nWe strongly recommend flakes for anyone getting started with Nix. Flakes is [production ready despite being marked as experimental](https://determinate.systems/posts/experimental-does-not-mean-unstable).\\n:::\\n\\n:::info\\nThe [Haskell infrastructure in nixpkgs](/nixpkgs-haskell) is the simplest way to get started with Nixifying a Haskell project. There are also other approaches (like [haskell.nix](https://github.com/input-output-hk/haskell.nix), [stacklock2nix](https://github.com/cdepillabout/stacklock2nix)). Later in the blog post series, we\'ll explore [haskell-flake] which builds on top of the Haskell infrastructure in nixpkgs\\n\\n[haskell-flake]: /haskell-flake\\n:::\\nIf you\'re unfamiliar with Nix, we have [a quick introduction](/nix-rapid) available to help you get started quickly or you can take your time and explore it at [Zero to Nix](https://zero-to-nix.com). A basic understanding of the Nix expression language is assumed. \\nThroughout the series, we will utilize a simple Haskell app called [todo-app](https://github.com/juspay/todo-app/tree/903c769d4bda0a8028fe3775415e9bdf29d80555) to illustrate how to build a Haskell project and automatically manage runtime dependencies such as databases (ie., [postgres](https://www.postgresql.org)) and and other services (here, we use [postgREST](https://postgrest.org/en/stable)), eliminating the need for any manual onboarding setup. This will allow us to highlight the advantages of using Nix.\\n\\n\\n## Why Nixify?\\n\\nWhy use Nix to develop a Haskell project rather than something like Stack or GHCup?\\n\\n- **Instant onboarding**: Projects have READMEs that describe how to setup the development environment but these instructions do not work the same way for \\nevery developer and usually takes hours or days to setup. With Nix the setup is instantaneous and reproducible,[^1] which means any new developer\\ncan get the development environment up and running with one command.\\n- **Enhanced productivity**: More time spent on writing Haskell as Nix gives a fully working development environment with `nix develop`.\\n- **Multi-platform**: Same configuration generally works on macOS, Linux and WSL.\\n:::note\\nAlthough macOS doesn\'t have first-class support in nixpkgs, [it is getting there](https://github.com/NixOS/nixpkgs/issues/116341).\\n:::\\n\\n[^1]: Considering the packages are available in Nix for the host platform.\\n\\nThe rest of this blog post will provide a step-by-step demonstration of how to Nixify the todo-app project.\\n\\n\\n## Introduce Flake\\n\\nTo begin, clone the [todo-app](https://github.com/juspay/todo-app/tree/903c769d4bda0a8028fe3775415e9bdf29d80555) repository and checkout the specified commit.\\n\\n```sh\\ngit clone https://github.com/juspay/todo-app.git\\ncd todo-app\\ngit checkout 076185e34f70e903b992b597232bc622eadfcd51\\n```\\n\\nNext, in the project\'s root directory, create a file named `flake.nix` and run `git add flake.nix` (Nix searches for `flake.nix` in git files). We will begin by setting up a basic template for the flake, which includes:\\n- Defining `inputs` and `outputs`\\n- Specifying the `system` corresponding to your machine.\\n\\nTl;dr This is how your `flake.nix` will look:\\n\\n```nix title=\\"flake.nix\\"\\n{\\n  inputs = {\\n    nixpkgs.url = \\"github:NixOS/nixpkgs/nixpkgs-unstable\\";\\n  };\\n  outputs = { self, nixpkgs }:\\n    let\\n      system = \\"aarch64-darwin\\";\\n      pkgs = nixpkgs.legacyPackages.${system};\\n    in\\n    {\\n      packages.${system}.default = pkgs.hello;\\n      apps.${system}.default = {\\n        type = \\"app\\";\\n        program = \\"${pkgs.hello}/bin/hello\\";\\n      };\\n      devShells.${system}.default = pkgs.mkShell {\\n        buildInputs = [\\n          pkgs.hello\\n        ];\\n      };\\n    };\\n}\\n```\\nA nix flake such as the one above consumes certain `inputs` and produces certain `outputs`. Let\'s break down each part of this `flake.nix`:\\n\\n### Inputs\\n:::info\\nThere are two ways to access the attributes of `inputs` within `outputs`:\\n  - Adding the attribute as a parameter to `outputs`, like `outputs = { self, <attribute> }`. This allows you to use the `<attribute>` without requiring any prefix.\\n  - Bind a variable to all the parameters of `outputs`, like `outputs = inputs@{self, ...}`. This enables you to access any attribute from `inputs` in this fashion: `inputs.<attribute>`.\\n:::\\n\\nA flake can reference other flakes, which are specified in the `inputs` attribute. We will use the [URL-like representation](https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html#url-like-syntax) to specify our input flakes.\\n\\nIn this example, we will use [GNU hello](https://www.gnu.org/software/hello) package from [`nixpkgs`](https://github.com/NixOS/nixpkgs) flake. Therefore, we\'ll specify the nixpkgs flake as an input, specifically using its `nixpkgs-unstable` branch.\\n:::note\\n`nixpkgs-unstable` branch is named as such because of the frequent updates it receives and doesn\'t imply that it is unsafe.\\n:::\\n\\n### Outputs\\n\\nThe `outputs` attribute of a flake is essentially a Nix function that takes inputs and returns the outputs attribute. \\n\\nThe inputs argument is an attrset containing `self` as well as the flake inputs (in our flake, we reference the only input `nixpkgs`).\\n:::info\\n`self` refers to the final state of attributes in the `outputs`. For example, `self.packages.${system}.default` refers to the attribute after assigning `pkgs.hello` to it.\\n:::\\n[Refer here](https://nixos.wiki/wiki/Flakes#Output_schema) for a detailed schema of `outputs`. Note that the `nixpkgs` key within the inputs attrset refers to the `outputs` of the `flake.nix` located at `nixpkgs.url`. If `nixpkgs.flake = false` is set, then the parameter will represent the source code.\\n\\nThe body of the function defines the flake outputs. Within the `let` block we define two values -- `system` (set as \\"aarch64-darwin\\" in this example, assuming we are on an ARM mac) and `pkgs` (referring to nixpkgs packages for `system`). In our example, `system` is hardcoded to a single system, but [forAllSystems](https://zero-to-nix.com/concepts/flakes#system-specificity) can be used to define packages for an array of systems.\\n\\nHere are some standard outputs a flake may produce:\\n\\n#### Packages\\n\\n- A flake\'s `packages.${system}` output contains [derivations](https://nixos.org/manual/nix/stable/language/derivations.html) that can be utilized to build the package.\\n- Executing `nix build` will build the `packages.${system}.default` output. Run `nix build .#<packageName>` to build the package named `packages.${system}.<packageName>`.\\n\\n#### Apps\\n\\n- A flake\'s `apps.${system}.<appName>` output refers to a flake app that can be exeucted using `nix run`. \\n  - It is attribute set containing two keys `type` and `program`. The `type` attribute determines how the program should be executed. For instance, \\"shell\\" indicates a shell script, \\"python\\" indicates a Python script, and \\"app\\" indicates an executable. The `program` attribute is a string representing the path in the Nix store where the executable is located.\\n- Executing `nix run` will run the `apps.${system}.default` app. Run `nix run .#<appName>` to run the app named `<appName>`.\\n\\n#### DevShells\\n\\n- By utilizing `pkgs.mkShell`, you can configure your development shell to include only the necessary packages.\\n- `pkgs.mkShell` generates a derivation that is evaluated when running the `nix develop` command.\\n- By default the derivation specified by `devShells.${system}.default` is evaluated. However, you also have the flexibility to define a custom development shell, such as `devShells.${system}.mydevShell` and execute it using `nix develop .#mydevShell`\\n\\n#### Visualize the flake outputs\\n\\n- Run `nix flake show`\\n:::note\\nRun `nix flake show --allow-import-from-derivation` in the further sections as `callCabal2nix` relies on [IFD](https://nixos.wiki/wiki/Import_From_Derivation)\\n:::\\n\\nHere\'s how it will look:\\n```\\n\u251c\u2500\u2500\u2500apps\\n\u2502   \u2514\u2500\u2500\u2500aarch64-darwin\\n\u2502       \u2514\u2500\u2500\u2500default: app\\n\u251c\u2500\u2500\u2500devShells\\n\u2502   \u2514\u2500\u2500\u2500aarch64-darwin\\n\u2502       \u2514\u2500\u2500\u2500default: development environment \'nix-shell\'\\n\u2514\u2500\u2500\u2500packages\\n    \u2514\u2500\u2500\u2500aarch64-darwin\\n        \u2514\u2500\u2500\u2500default: package \'hello-2.12.1\'\\n```\\n#### See the flake in action\\n\\n<AsciinemaWidget src=\\"https://asciinema.org/a/591420.cast\\" speed={3} rows={30} idleTimeLimit={3} preload={true} theme={\\"solarized-light\\"} />\\n\\n## Nixify Haskell package\\n\\nIn the previous section we wrote a hello world flake that contains the \\"hello\\" package. Now, let\'s write a flake for our Haskell project `todo-app`.\\n\\nTl;dr Here is the `flake.nix` for this section:\\n\\n```nix title=\\"flake.nix\\"\\n{\\n  inputs = {\\n    nixpkgs.url = \\"github:NixOS/nixpkgs/nixpkgs-unstable\\";\\n  };\\n  outputs = { self, nixpkgs }:\\n    let\\n      system = \\"aarch64-darwin\\";\\n      pkgs = nixpkgs.legacyPackages.${system};\\n      overlay = final: prev: {\\n        todo-app = final.callCabal2nix \\"todo-app\\" ./. { };\\n      };\\n      myHaskellPackages = pkgs.haskellPackages.extend overlay;\\n    in\\n    {\\n      packages.${system}.default = myHaskellPackages.todo-app;\\n      apps.${system}.default = {\\n        type = \\"app\\";\\n        program = \\"${self.packages.${system}.default}/bin/todo-app\\";\\n      };\\n    };\\n}\\n```\\nLet\'s break it down!\\n### haskellPackages\\n\\nConsult [the official manual](https://nixos.org/manual/nixpkgs/unstable/#haskell) to learn more about the Haskell infrastructure in nixpkgs, but for the purpose of our blog post it is suffice to know that:\\n\\n- `pkgs.haskellPackages` is an attribute set that contains all Haskell packages maintained within `nixpkgs`.\\n- Since our local package (`todo-app`) is not already included in `pkgs.haskellPackages`, we need to manually add it.\\n- Technically, you can use `packages.${system}.default = pkgs.${system}.haskellPackages.callCabal2nix \\"todo-app\\" ./. { };` to include the package. However, adding it to `haskellPackages` consolidates every Haskell package in one place. \\n\\nIn summary, adding the local package to `pkgs.haskellPackages` centralizes the package management process and simplifies the usage of the package within other flakes.\\n\\n### Overlay\\n\\n[Overlays](https://nixos.wiki/wiki/Overlays) are used to override an existing package set, such as `pkgs.haskellPackages`, and produce a new package set containing the changes. These changes could be either about overriding a single package in the package set (the second argument `super` references the original package set), or it could be about adding new packages to it. \\n\\n### callCabal2nix\\n\\nThe `callCabal2nix` function generates a Haskell package derivation based on its source. This function internally utilizes [\\"cabal2nix\\"](https://github.com/NixOS/cabal2nix), which is a Haskell utility that generates Nix build instructions from a cabal file.\\n\\n\\n### Time to run!\\n<AsciinemaWidget src=\\"https://asciinema.org/a/591422.cast\\" speed={3} rows={30} idleTimeLimit={3} preload={true} theme={\\"solarized-light\\"} />\\n\\n## Nixify DevShell\\n\\nOur existing flake enables us to *build* the `todo-app`. However, what if want to develop it, by adding a feature or fixing a bug? For Haskell development, we normally use [cabal](https://cabal.readthedocs.io/) and tools like [ghcid](https://github.com/ndmitchell/ghcid). These tools require a GHC environment that includes the packages specified in the `build-depends` of our cabal file. This is where `devShell` becomes useful as it provides an isolated environment with all packages required by the project, catering to our development needs.\\n\\nTl;dr Here is the `flake.nix` for this section:\\n\\n```nix title=\\"flake.nix\\"\\n{\\n  inputs = {\\n    nixpkgs.url = \\"github:NixOS/nixpkgs/nixpkgs-unstable\\";\\n  };\\n  outputs = { self, nixpkgs }:\\n    let\\n      system = \\"aarch64-darwin\\";\\n      pkgs = nixpkgs.legacyPackages.${system};\\n      overlay = final: prev: {\\n        todo-app = final.callCabal2nix \\"todo-app\\" ./. { };\\n      };\\n      myHaskellPackages = pkgs.haskellPackages.extend overlay;\\n    in\\n    {\\n      devShells.${system}.default = myHaskellPackages.shellFor {\\n        packages = p : [\\n          p.todo-app\\n        ];\\n        buildInputs = with myHaskellPackages; [\\n          ghcid\\n          cabal-install\\n        ];\\n      };\\n    };\\n}\\n```\\n\\n### shellFor\\n\\n- In the above flake, we utilize the [`shellFor`](https://nixos.wiki/wiki/Haskell#Using_shellFor_.28multiple_packages.29) function from the `haskellPackages` attribute set to set up the default shell for our project. \\n- `shellFor` is an abstraction over [`mkShell`](https://ryantm.github.io/nixpkgs/builders/special/mkshell/) geared specifically for Haskell development shells. Generally, we only need to define two keys `packages` and `nativeBuildInputs`. `packages` marks which of the packages in the package set are *local* packages (to be compiled by cabal). `nativeBuildInputs` is used to ensure that the specified packages are present in the `PATH` of the isolated development environment.\\n\\n### Let\'s run!\\n<AsciinemaWidget src=\\"https://asciinema.org/a/591426.cast\\" speed={3} rows={30} idleTimeLimit={3} preload={true} theme={\\"solarized-light\\"} />\\n\\n## Nixify external dependencies\\n\\nUp until now, we have nixified the Haskell portion of our project. However, a project can also have non-Haskell dependencies, like Postgres, MySQL and Redis. In this section we will specifically look at how you can start a postgres server using Nix without relying or mutating global state (outside of project directory).\\n\\nTl;dr Here\'s the `flake.nix`:\\n\\n```nix title=\\"flake.nix\\"\\n{\\n  inputs = {\\n    nixpkgs.url = \\"github:NixOS/nixpkgs/nixpkgs-unstable\\";\\n  };\\n  outputs = { self, nixpkgs }:\\n  let\\n    system = \\"aarch64-darwin\\";\\n    pkgs = nixpkgs.legacyPackages.${system};\\n  in\\n  {\\n    apps.${system}.postgres = {\\n      type = \\"app\\";\\n      program = \\n        let\\n          script = pkgs.writeShellApplication {\\n            name = \\"pg_start\\";\\n            runtimeInputs = [ pkgs.postgresql ];\\n            text = \\n            \'\'\\n              # Initialize a database with data stored in current project dir\\n              [ ! -d \\"./data/db\\" ] && initdb --no-locale -D ./data/db\\n\\n              postgres -D ./data/db -k \\"$PWD\\"/data\\n            \'\';\\n          };\\n        in \\"${script}/bin/pg_start\\";\\n    };\\n  };\\n}\\n```\\n### writeShellApplication\\n\\n- The [`writeShellApplication`](https://noogle.dev/?selected=%22build-support.trivial-builders.writeShellApplication%22&term=%22writeShellApplication%22) function generates a derivation for a shell script specified as the value for `text` attribute. \\n- `runtimeInputs`: packages to be made available to the shell application\'s PATH.\\n- `writeShellApplication` uses [shellcheck](https://github.com/koalaman/shellcheck) to statically analyze your bash script for issues.\\n- `\\"${script}\\"` provides the path in the `nix/store` where the application is located.\\n\\n### Run it!\\n<AsciinemaWidget src=\\"https://asciinema.org/a/591427.cast\\" speed={3} rows={30} idleTimeLimit={3} preload={true} theme={\\"solarized-light\\"} />\\n\\n## Nixify Combined\\n\\nNow it\'s time to consolidate all the previously discussed sections into a single `flake.nix`. Additionally, we should incorporate the necessary apps for `postgrest` and `createdb`. `postgrest` app will start the service and `createdb` will handle tasks such as loading the database dump, creating a database user, and configuring the database for postgREST.\\n\\n```nix title=\\"flake.nix\\"\\n{\\n  inputs = {\\n    nixpkgs.url = \\"github:NixOS/nixpkgs/nixpkgs-unstable\\";\\n  };\\n  outputs = { self, nixpkgs }:\\n    let\\n      system = \\"aarch64-darwin\\";\\n      pkgs = nixpkgs.legacyPackages.${system};\\n      overlay = final: prev: {\\n        todo-app = final.callCabal2nix \\"todo-app\\" ./. { };\\n      };\\n      myHaskellPackages = pkgs.haskellPackages.extend overlay;\\n    in\\n    {\\n      packages.${system}.default = myHaskellPackages.todo-app;\\n\\n      devShells.${system}.default = myHaskellPackages.shellFor {\\n        packages = p: [\\n          p.todo-app\\n        ];\\n        buildInputs = with myHaskellPackages; [\\n          ghcid\\n          cabal-install\\n          haskell-language-server\\n        ];\\n      };\\n\\n      apps.${system} = {\\n        default = {\\n          type = \\"app\\";\\n          program = \\"${self.packages.${system}.default}/bin/todo-app\\";\\n        };\\n        postgres = {\\n          type = \\"app\\";\\n          program =\\n            let\\n              script = pkgs.writeShellApplication {\\n                name = \\"pg_start\\";\\n                runtimeInputs = [ pkgs.postgresql ];\\n                text =\\n                  \'\'\\n                    # Initialize a database with data stored in current project dir\\n                    [ ! -d \\"./data/db\\" ] && initdb --no-locale -D ./data/db\\n\\n                    postgres -D ./data/db -k \\"$PWD\\"/data\\n                  \'\';\\n              };\\n            in\\n            \\"${script}/bin/pg_start\\";\\n        };\\n        createdb = {\\n          type = \\"app\\";\\n          program =\\n            let\\n              script = pkgs.writeShellApplication {\\n                name = \\"createDB\\";\\n                runtimeInputs = [ pkgs.postgresql ];\\n                text =\\n                  \'\'\\n                    # Create a database of your current user\\n                    if ! psql -h \\"$PWD\\"/data -lqt | cut -d \\\\| -f 1 | grep -qw \\"$(whoami)\\"; then\\n                      createdb -h \\"$PWD\\"/data \\"$(whoami)\\"\\n                    fi\\n\\n                    # Load DB dump\\n                    psql -h \\"$PWD\\"/data < db.sql\\n\\n                    # Create configuration file for postgrest\\n                    echo \\"db-uri = \\\\\\"postgres://authenticator:mysecretpassword@localhost:5432/$(whoami)\\\\\\"\\n                    db-schemas = \\\\\\"api\\\\\\"\\n                    db-anon-role = \\\\\\"todo_user\\\\\\"\\" > data/db.conf\\n                  \'\';\\n              };\\n            in\\n            \\"${script}/bin/createDB\\";\\n        };\\n        postgrest = {\\n          type = \\"app\\";\\n          program =\\n            let\\n              script = pkgs.writeShellApplication {\\n                name = \\"pgREST\\";\\n                runtimeInputs = [ myHaskellPackages.postgrest ];\\n                text =\\n                  \'\'\\n                    postgrest ./data/db.conf\\n                  \'\';\\n              };\\n            in\\n            \\"${script}/bin/pgREST\\";\\n        };\\n      };\\n    };\\n}\\n```\\nFor the complete souce code, visit [here](https://github.com/juspay/todo-app/tree/tutorial/1). It\'s worth noting that the source code uses [`forAllSystems`](https://zero-to-nix.com/concepts/flakes#system-specificity), which was not included in the tutorial above to maintain simplicity.\\n\\n### Video Walkthrough\\n<AsciinemaWidget src=\\"https://asciinema.org/a/591435.cast\\" speed={3} rows={30} idleTimeLimit={3} preload={true} theme={\\"solarized-light\\"} />\\n\\n\\n## Conclusion\\n\\nLet\'s see how the blog post addresses the points from the section [Why Nixify?](#why-nixify) \\n- **Instant onboarding**: There is no confusion about how to setup the development environment. It is `nix run .#postgres` to start the postgres server,\\n`nix run .#createdb` to setup the database and `nix run .#postgrest` to start the Postgrest web server. This happens in a reproducible way, ensuring every\\ndeveloper gets the same environment.\\n- **Enhanced productivity**: The commands mentioned in the previous points in conjunction with `nix develop` is all that is needed to make a quick change\\nand see it in effect.\\n- **Multi-platform**: All the commands mentioned in the previous points will work in the same way across platforms.\\n\\nIn the next blog post, we will modularize this `flake.nix` using the [`flake-parts`](https://flake.parts/) framework by Robert Hensing.\\n\\n## Credits\\n- After going through numerous iterations, I am grateful to [srid](https://srid.ca/) for his valuable assistance in bringing this blog to its current stage.\\n- I would also like to thank the following folks for their valuable feedback:\\n  - [cdepillabout](https://github.com/cdepillabout)\\n  - [Hao Liu](https://github.com/leomayleomay)"}]}')}}]);