const fs = require("fs");
const path = require("path");

const domains = ["https://vaclavparma.cz", "https://vaclav-parma.cz"];

const distPath = path.join(__dirname, "dist");
const sitemapIndexPath = path.join(distPath, "sitemap-index.xml");

function createSitemapForDomain(domain, sitemapNumber) {
  const baseSitemapPath = path.join(distPath, `sitemap-0.xml`);
  const newSitemapPath = path.join(distPath, `sitemap-${sitemapNumber}.xml`);

  return new Promise((resolve, reject) => {
    fs.readFile(baseSitemapPath, "utf8", (err, data) => {
      if (err) {
        return reject(`Error reading ${baseSitemapPath}: ${err}`);
      }

      const newSitemapContent = data.replace(/https:\/\/vaclavparma.cz/g, domain);

      fs.writeFile(newSitemapPath, newSitemapContent, (err) => {
        if (err) {
          return reject(`Error writing ${newSitemapPath}: ${err}`);
        }

        console.log(`${newSitemapPath} successfully created for ${domain}.`);
        resolve(`<sitemap><loc>${domain}/sitemap-${sitemapNumber}.xml</loc></sitemap>`);
      });
    });
  });
}

function updateSitemapIndex(newEntries) {
  fs.readFile(sitemapIndexPath, "utf8", (err, data) => {
    if (err) {
      return console.error(`Error reading sitemap-index.xml: ${err}`);
    }

    const updatedIndex = data.replace("</sitemapindex>", `${newEntries.join("\n")}\n</sitemapindex>`);

    fs.writeFile(sitemapIndexPath, updatedIndex, (err) => {
      if (err) {
        return console.error(`Error writing sitemap-index.xml: ${err}`);
      }

      console.log(`sitemap-index.xml successfully updated with new sitemaps.`);
    });
  });
}

function generateSitemaps() {
  fs.readdir(distPath, (err, files) => {
    if (err) {
      return console.error(`Error reading dist folder: ${err}`);
    }

    const sitemapNumbers = files
      .map((file) => {
        const match = file.match(/sitemap-(\d+)\.xml/);
        return match ? parseInt(match[1], 10) : null;
      })
      .filter((num) => num !== null);

    const maxSitemapNumber = Math.max(...sitemapNumbers, 0);

    const promises = domains.slice(1).map((domain, index) => {
      const sitemapNumber = maxSitemapNumber + index + 1;
      return createSitemapForDomain(domain, sitemapNumber);
    });

    Promise.all(promises)
      .then((newEntries) => updateSitemapIndex(newEntries))
      .catch((err) => console.error(`Error generating sitemaps: ${err}`));
  });
}

generateSitemaps();
