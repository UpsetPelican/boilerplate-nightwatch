module.exports = {
  "src_folders": [
    "./tests"
  ],
  "output_folder": "reports",
  "custom_commands_path": [
    "./node_modules/testarmada-nightwatch-extra/lib/commands",
    "./node_modules/testarmada-nightwatch-extra/lib/commands/mobile",
    "./lib/custom_commands"
  ],
  "custom_assertions_path": [
    "./node_modules/testarmada-nightwatch-extra/lib/assertions",
    "./node_modules/testarmada-nightwatch-extra/lib/assertions/mobile"
  ],
  "page_objects_path": [
    "./lib/pages"
  ],
  "globals_path": "./lib/globals.js",
  "selenium": {
    "start_process": true,
    "server_path": "./node_modules/selenium-server/lib/runner/selenium-server-standalone-3.11.0.jar",
    "log_path": "reports",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./node_modules/chromedriver/lib/chromedriver/chromedriver",
      "webdriver.gecko.driver": "./node_modules/geckodriver/bin/geckodriver",
      "webdriver.ie.driver": ""
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "http://dev.walmart.com",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "sync_test_names": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "desiredCapabilities": {},
      "globals": {
        "waitForConditionTimeout": 60000,
        "asyncHookTimeout": 60000,
        "syncModeBrowserList": [
          "safari:10",
          "iphone",
          "ipad"
        ]
      },
      "plugins": [
        "./lib/drydock.js"
      ]
    },
    "safari": {
      "desiredCapabilities": {
        "browserName": "safari"
      }
    },
    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
    "invisiblechrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            "--headless"
          ]
        }
      }
    },
    "dockerchrome": {
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      "selenium": {
        "start_process": false
      }
    },
    "appiummweb": {
      "desiredCapabilities": {
        "browserName": "safari",
        "appiumVersion": "1.6.5",
        "automationName": "XCUITest",
        "platformName": "iOS",
        "platformVersion": "10.3",
        "deviceName": "iPhone 7",
        "waitForAppScript": "true"
      },
      "selenium": {
        "start_process": false
      },
      "appium": {
        "start_process": true
      }
    },
    "appiumandroidmweb": {
      "desiredCapabilities": {
        "browserName": "Chrome",
        "appiumVersion": "1.6.5",
        "platformName": "Android",
        "platformVersion": "7.0",
        "deviceName": "Pixel_API_24",
        "avd": "Pixel_API_24",
        "avdArgs": "-netfast -noaudio -no-boot-anim"
      },
      "selenium": {
        "start_process": false
      },
      "appium": {
        "start_process": true
      }
    },
    "sauce": {
      "selenium_host": "ondemand.saucelabs.com",
      "selenium_port": 80,
      "username": "",
      "access_key": "",
      "desiredCapabilities": {
        "browserName": "",
        "platform": "",
        "version": ""
      },
      "selenium": {
        "start_process": false
      }
    },
    "browserstack": {
      "selenium_host": "hub-cloud.browserstack.com",
      "selenium_port": 80,
      "selenium": {
        "start_process": false
      }
    }
  }
}