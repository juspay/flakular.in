---
sidebar_position: 1
slug: /store
---

# The Nix Store

:::warning TODO
Write this to completion.
:::

Nix is purely functional but in [the context of file system](https://www.tweag.io/blog/2022-07-14-taming-unix-with-nix/) (as opposed to values stored in memory). As such, how this file system is structured (called Nix Store) will be the first foundation to understand.

The **Nix store** is by default located in the `/nix/store` directory. The contents of this directory are called **store paths**. For eg., `/nix/store/05p0my9hlc33iamk3rzg61rgg1fhrf7w-haskell-template-0.1.0.0` is a store path. Thus a Nix store is simply a collection of store paths. Transformation and manipulation of these store paths to produce new further store paths is what is largely involved in the Nix build process.

:::caution TODO: Diagram
- File system diagram of Nix store
- Entities connected to one another.
:::

## Kitchen analogy

If the *Nix store* is a kitchen, then the *store paths* are the various elements in it -- foodstuff, ingredients, recipes, cooked food, dinner, etc. 

![Cheeseburger](https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Burger_King_Quad_Stacker_cheeseburger.jpg/2560px-Burger_King_Quad_Stacker_cheeseburger.jpg)

Let's say you want to cook a [cheeseburger](https://en.wikipedia.org/wiki/Cheeseburger). In Nix-speak, we say that we want to *build* the cheeseburger *package*. To cook (build) the cheeseburger, however we need a receipt first. In Nix-speak, we call this recipe a *derivation*. Both packages and derivations are *store paths* that exist in the Nix store; the Nix store uniformly treats them as store paths, with no special treatment. Likewise, both the cheeseburger recipe (as a paper document) and the cheeseburger itself (as a cooked food) exist in your kitchen as physical objects.

:::caution TODO: Analogy table
A tabular comparison of the terms, establishing nomenclature for rest of article.
:::

...

:::caution TODO: Diagram
- Kitchen recipes
- Sharing recipes with neighbours
:::

## Interactive exploration

```bash
TODO: nix commands to explore/manipulate the store directly

nix store add-file
nix store add-path
nix store delete
nix store prefetch-file
```

Creating a recipe (derivation)

There is a `nix derivation add` command to create a derivation via JSON, but let's use the [Nix language](/lang) to do this, in the REPL (using the bulitin function `derivation`), as it is more convenient.

```nix
$ nix repl

nix-repl> drv = derivation { 
        name = "hello"; 
        builder = "/bin/bash"; 
        system = "aarch64-darwin"; 
        args = [ "-c" "echo Hello > $out"]; 
    }

nix-repl> drv
«derivation /nix/store/2dc96vagivg3h45sbkr2jrl31xnmdj2c-hello.drv»

nix-repl> :b drv
This derivation produced the following outputs:
  out -> /nix/store/gaarvnj99dcfx8c8wnvfsqzql2fj5d65-hello

```

Here `/nix/store/2dc96vagivg3h45sbkr2jrl31xnmdj2c-hello.drv` is the recipe or derivation. Building (or "cooking") it gives us the package (or "cooked food") `/nix/store/gaarvnj99dcfx8c8wnvfsqzql2fj5d65-hello`. The recipe itself does nothing fancy, aside from creating a file with the contents "Hello" in it. In Nix of course it is possible to create derivations that build an entire Linux distribution ([NixOS](/nixos-flake)), just as one might gather up a set of recipes to cook for a big party.

A derivation can use outputs of another derivation, just as a recipe can use the product of another recipe:

```nix
# Uses the derivation defined above, by referencing `${drv}` that points to the
# out path of that derivation
nix-repl> :b derivation { 
        name = "hello-world"; 
        builder = "/bin/bash"; 
        system = "aarch64-darwin"; 
        args = [ "-c" "/bin/cat ${drv} > $out; echo World >> $out"]; 
    }
This derivation produced the following outputs:
  out -> /nix/store/nw7fyal65xfzbhaqxjgfm9i4m4fyd92l-hello-world
```

:::info Tip
There are more convenient ways to write derivations, such as `stdenv.mkDerivation`. We'll expore these in the [Nix language](/lang) section.
:::



## Exercises

TODO