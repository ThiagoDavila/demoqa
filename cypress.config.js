const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    testIsolation: false
  },
});

//npm run cypress:open