const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n8fc1i',
  e2e: {
    password: process.env.GLOBAL_PASSWORD || process.env.BB_password,
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/specs/*.js',
    setupNodeEvents(on, config) {
     
    },
  },
  chromeWebSecurity: false,
  browser: "chrome",
  chromeBinary: "/usr/bin/google-chrome",
  watchForFileChanges: false
});
