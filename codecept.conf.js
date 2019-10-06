exports.config = {
  tests: './test/**/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: "1380x960",
      chrome: {
        defaultViewport: {
          width: 1380,
          height: 960
        },
        disableScreenshots: false,
        args: [
          "--incognito",
          "--disable-infobars",
          "--windows-position=0,0",
          "--window-size=1380,960"
        ]
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'tokopedia-pulsa'
}