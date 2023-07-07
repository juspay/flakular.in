# zero-to-flakes

## Local

In nix shell,

```bash
, run
```

## Guidelines for writing docs

### Slugs

Slugs must in the form of either of the following:

- `/foo`: A single component slug for all docs by default
- `/<module>/foo`: Documentation for page "foo" under flake-parts module named "<module>".

### Linking

Unfortunately, [Docusaurus](https://docusaurus.io) is not great with cross-linking, so you must always link to pages using slugs (see section above) rather than file paths.  If a link is broken, then the Docusaurus build will fail.

### Preview & CI

WIP: https://github.com/juspay/zero-to-flakes/issues/6
