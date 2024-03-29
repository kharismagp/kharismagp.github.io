/* eslint-disable @typescript-eslint/no-var-requires */
const RSS = require("rss");
const fs = require("fs");
const path = require("path");
const frontMatter = require("front-matter");

const articles = path.resolve(__dirname, "../data", "blog", "articles");
const comparisons = path.resolve(__dirname, "../data", "blog", "comparisons");
const releases = path.resolve(__dirname, "../data", "blog", "releases");
const tutorials = path.resolve(__dirname, "../data", "blog", "tutorials");

const feed = new RSS({
  title: `avif.io RSS Feed`,
  description: "Your description",
  feed_url: `https://avif.io/rss.xml`,
  site_url: `https://avif.io`,
  managingEditor: "justin@justinschmitz.de (Justin Schmitz)",
  webMaster: "justin@justinschmitz.de (Justin Schmitz)",
  copyright: `2021 Justin Schmitz`,
  language: "en",
  pubDate: new Date().toLocaleString(),
  ttl: "60",
});

fs.readdirSync(articles)
  .map((fileName) => {
    const fullPath = path.join(articles, fileName);
    const file = fs.readFileSync(fullPath, "utf8");
    const { attributes } = frontMatter(file);
    return { ...attributes, fileName };
  })
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .forEach(({ title, description, fileName, datePublished }) => {
    datePublished = datePublished.split(".");
    datePublished =
      "20" + datePublished[2] + "-" + datePublished[1] + "-" + datePublished[0];
    feed.item({
      title,
      description,
      url: `https://avif.io/blog/articles/${fileName.replace(".mdx", "")}/`,
      date: datePublished,
    });
  });

fs.readdirSync(comparisons)
  .map((fileName) => {
    const fullPath = path.join(comparisons, fileName);
    const file = fs.readFileSync(fullPath, "utf8");
    const { attributes } = frontMatter(file);
    return { ...attributes, fileName };
  })
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .forEach(({ title, description, datePublished, fileName }) => {
    datePublished = datePublished.split(".");
    datePublished =
      "20" + datePublished[2] + "-" + datePublished[1] + "-" + datePublished[0];
    feed.item({
      title,
      description,
      url: `https://avif.io/blog/comparisons/${fileName.replace(".mdx", "")}/`,
      date: datePublished,
    });
  });

fs.readdirSync(releases)
  .map((fileName) => {
    const fullPath = path.join(releases, fileName);
    const file = fs.readFileSync(fullPath, "utf8");
    const { attributes } = frontMatter(file);
    return { ...attributes, fileName };
  })
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .forEach(({ title, description, datePublished, fileName }) => {
    datePublished = datePublished.split(".");
    datePublished =
      "20" + datePublished[2] + "-" + datePublished[1] + "-" + datePublished[0];
    feed.item({
      title,
      description,
      url: `https://avif.io/blog/releases/${fileName.replace(".mdx", "")}/`,
      date: datePublished,
    });
  });

fs.readdirSync(tutorials)
  .map((fileName) => {
    const fullPath = path.join(tutorials, fileName);
    const file = fs.readFileSync(fullPath, "utf8");
    const { attributes } = frontMatter(file);
    return { ...attributes, fileName };
  })
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  .forEach(({ title, description, datePublished, fileName }) => {
    datePublished = datePublished.split(".");
    datePublished =
      "20" + datePublished[2] + "-" + datePublished[1] + "-" + datePublished[0];
    feed.item({
      title,
      description,
      url: `https://avif.io/blog/tutorials/${fileName.replace(".mdx", "")}/`,
      date: datePublished,
    });
  });

const xml = feed.xml();

fs.writeFileSync(path.resolve(__dirname, "../public") + "/rss.xml", xml);
