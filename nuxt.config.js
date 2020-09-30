module.exports = {
  modules: ["bootstrap-vue/nuxt"],
  buildModules: [
    // Simple usage
    "@nuxtjs/vuetify",

    // With options
    [
      "@nuxtjs/vuetify",
      {
        /* module options */
      },
    ],
  ],
};
