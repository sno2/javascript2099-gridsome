// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Javascript/2099",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./tutorials/**/*.md",
        typeName: "Tutorial",
      },
    },
  ],
  templates: {
    Tutorial: "/tutorials/:title",
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
