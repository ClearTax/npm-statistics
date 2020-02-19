const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const fetch = require("node-fetch");
const table = require("markdown-table");
const markdownMagic = require("markdown-magic");
const npmtotal = require("npmtotal");
const { "npm-stats": key } = require("./package.json");

const badgeStats = require("./stats.json");

if (!key) {
  throw new Error("Please add `npm-stats` to your package.json");
}

(async () => {
  const stats = await npmtotal(key, {
    startDate: '2019-06-03'
  });

  const sortedStats = stats.stats

  badgeStats.message = `${stats.sum} Downloads`;

  await fs.writeFileSync("./stats.json", JSON.stringify(badgeStats, null, 2));

  generate(sortedStats, stats.sum);
})();

function generate(data, sum) {
  const config = {
    transforms: {
      PACKAGES() {
        return table([
          ["Name", "Downloads"],
          ...data,
          ["**Sum**", `**${sum}**`]
        ]);
      }
    }
  };

  markdownMagic(path.join(__dirname, "README.md"), config, d => {
    console.log(`Updated total downloads - ${sum}`);
  });
}
