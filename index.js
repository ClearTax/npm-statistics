const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const fetch = require("node-fetch");
const table = require("markdown-table");
const markdownMagic = require("markdown-magic");
const { "npm-author": author } = require("./package.json");

const badgeStats = require("./stats.json");

if (!author) {
  throw new Error("Please add `npm-author` to your package.json");
}

(async () => {
  const date = new Date().toJSON().slice(0, 10),
    url = `https://npm-stat.com/api/download-counts?author=${author}&from=2019-06-03&until=${date}`;

  const res = await fetch(url);
  const data = await res.json();

  let stats = [];

  for (let [package, downloads] of Object.entries(data)) {
    stats.push([`\`${package}\``, _.sum(Object.values(downloads))]);
  }

  const sortedStats = _.reverse(
    _.sortBy(stats, [
      function(o) {
        return o[1];
      }
    ])
  );
  const sum = _.sumBy(sortedStats, function(o) {
    return o[1];
  });

  badgeStats.message = `${sum} Downloads`;

  await fs.writeFileSync("./stats.json", JSON.stringify(badgeStats, null, 2));

  generate(sortedStats, sum);
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
    console.log(`Updated total downloads ${sum}`);
  });
}
