const settings = {
  name: "frontity-playground",
  state: {
    frontity: {
      url: "https://webdevstudios.com",
      title: "WebDevStudios Blog",
      description: "WordPress Website Design and Development Agency",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["WordPress", "/category/wordpress/"],
            ["Design", "/category/design/"],
            ["Ecommerce", "/category/ecommerce/"],
            ["Marketing", "/category/marketing/"],
            ["Plugins", "/category/plugins/"],
            ["About", "/about/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://webdevstudios.com/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
