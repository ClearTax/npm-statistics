# npm-statistics

![NPM Stats](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FClearTax%2Fnpm-statistics%2Fmaster%2Fstats.json)

NPM Download Statistics for ClearTax Open Source Projects. Updated Daily.

## Downloads

<!-- Please do not modify this auto generated content -->
<!-- AUTO-GENERATED-CONTENT:START (PACKAGES) -->
| Name                                                                                                                                 | Downloads  |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| [@cleartax/zoids](https://www.npmjs.com/package/@cleartax/zoids)                                                                     | 29504      |
| [post-merge-install](https://www.npmjs.com/package/post-merge-install)                                                               | 23134      |
| [engines-ok](https://www.npmjs.com/package/engines-ok)                                                                               | 13677      |
| [install-types](https://www.npmjs.com/package/install-types)                                                                         | 13104      |
| [@cleartax/apollo-server-plugin-introspection-auth](https://www.npmjs.com/package/@cleartax/apollo-server-plugin-introspection-auth) | 13069      |
| [@cleartax/eslint-config](https://www.npmjs.com/package/@cleartax/eslint-config)                                                     | 9729       |
| [props-validator](https://www.npmjs.com/package/props-validator)                                                                     | 4413       |
| [pivotal-flow](https://www.npmjs.com/package/pivotal-flow)                                                                           | 3914       |
| **Sum**                                                                                                                              | **110544** |
<!-- AUTO-GENERATED-CONTENT:END -->

### Wanna use `npm-statistics`?

1. `Fork` this repository.
2. Add your npm username/author or list of packages in `package.json` as `npm-stats` key.
   for author

```js
{
  "npm-stats": "cleartax"
}
```

or for packages

```js
{
  "npm-stats": [
    "post-merge-install",
    "engines-ok"
  ]
}
```

3. Run `npm i` and then `npm start` to generate the Downloads.
4. The repo comes with a daily CRON job that updates the Downloads.
5. For updating the badge replace `ClearTax` in badge endpoint to your github username/orgname.
   https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2F`username`%2Fnpm-statistics%2Fmaster%2Fstats.json
6. Enable `GitHub Actions` for your forked repo, as it is disabled by default for forks.

## Ref

- [npmtotal](https://github.com/maddhruv/npmtotal) - Find you npm download statistics
