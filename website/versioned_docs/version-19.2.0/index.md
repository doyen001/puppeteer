# Puppeteer

[![Build status](https://github.com/puppeteer/puppeteer/workflows/CI/badge.svg)](https://github.com/puppeteer/puppeteer/actions?query=workflow%3ACI)
[![npm puppeteer package](https://img.shields.io/npm/v/puppeteer.svg)](https://npmjs.org/package/puppeteer)

<img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" height="200" align="right"/>

#### [Guides](https://pptr.dev/category/guides) | [API](https://pptr.dev/api) | [FAQ](https://pptr.dev/faq) | [Contributing](https://pptr.dev/contributing) | [Troubleshooting](https://pptr.dev/troubleshooting)

> Puppeteer is a Node.js library which provides a high-level API to control
> Chrome/Chromium over the
> [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/).
> Puppeteer runs in
> [headless](https://developers.google.com/web/updates/2017/04/headless-chrome)
> mode by default, but can be configured to run in full (non-headless)
> Chrome/Chromium.

#### What can I do?

Most things that you can do manually in the browser can be done using Puppeteer!
Here are a few examples to get you started:

- Generate screenshots and PDFs of pages.
- Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e.
  "SSR" (Server-Side Rendering)).
- Automate form submission, UI testing, keyboard input, etc.
- Create an automated testing environment using the latest JavaScript and
  browser features.
- Capture a
  [timeline trace](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)
  of your site to help diagnose performance issues.
- Test Chrome Extensions.

## Getting Started

### Installation

To use Puppeteer in your project, run:

```bash
npm i puppeteer
# or `yarn add puppeteer`
# or `pnpm i puppeteer`
```

When you install Puppeteer, it automatically downloads a recent version of
Chromium (~170MB macOS, ~282MB Linux, ~280MB Windows) that is
[guaranteed to work](https://pptr.dev/faq#q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy)
with Puppeteer. For a version of Puppeteer without installation, see
[`puppeteer-core`](#puppeteer-core).

#### Configuration

Puppeteer uses several defaults that can be customized through configuration
files.

For example, to change the default cache directory Puppeteer uses to install
browsers, you can add a `.puppeteerrc.cjs` (or `puppeteer.config.cjs`) at the
root of your application with the contents

```js
const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
```

After adding the configuration file, you will need to remove and reinstall
`puppeteer` for it to take effect.

See [Configuring Puppeteer](https://pptr.dev/guides/configuration) for more
information.

#### `puppeteer-core`

Every release since v1.7.0 we publish two packages:

- [`puppeteer`](https://www.npmjs.com/package/puppeteer)
- [`puppeteer-core`](https://www.npmjs.com/package/puppeteer-core)

`puppeteer` is a _product_ for browser automation. When installed, it downloads
a version of Chromium, which it then drives using `puppeteer-core`. Being an
end-user product, `puppeteer` automates several workflows using reasonable
defaults [that can be customized](https://pptr.dev/guides/configuration).

`puppeteer-core` is a _library_ to help drive anything that supports DevTools
protocol. Being a library, `puppeteer-core` is fully driven through its
programmatic interface implying no defaults are assumed and `puppeteer-core`
will not download Chromium when installed.

You should use `puppeteer-core` if you are
[connecting to a remote browser](https://pptr.dev/api/puppeteer.puppeteer.connect)
or [managing browsers yourself](https://pptr.dev/api/puppeteer.browserfetcher).
If you are managing browsers yourself, you will need to call
[`puppeteer.launch`](https://pptr.dev/api/puppeteer.puppeteernode.launch) with
an an explicit
[`executablePath`](https://pptr.dev/api/puppeteer.launchoptions.executablepath)
(or [`channel`](https://pptr.dev/api/puppeteer.launchoptions.channel) if it's
installed in a standard location).

When using `puppeteer-core`, remember to change the import:

```ts
import puppeteer from 'puppeteer-core';
```

### Usage

Puppeteer follows the latest
[maintenance LTS](https://github.com/nodejs/Release#release-schedule) version of
Node.

Puppeteer will be familiar to people using other browser testing frameworks. You
[launch](https://pptr.dev/api/puppeteer.puppeteernode.launch)/[connect](https://pptr.dev/api/puppeteer.puppeteernode.connect)
a [browser](https://pptr.dev/api/puppeteer.browser),
[create](https://pptr.dev/api/puppeteer.browser.newpage) some
[pages](https://pptr.dev/api/puppeteer.page), and then manipulate them with
[Puppeteer's API](https://pptr.dev/api).

For more in-depth usage, check our [guides](https://pptr.dev/category/guides)
and [examples](https://github.com/puppeteer/puppeteer/tree/main/examples).

#### Example

The following example searches
[developers.google.com/web](https://developers.google.com/web) for articles
tagged "Headless Chrome" and scrape results from the results page.

```ts
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://developers.google.com/web/');

  // Type into search box.
  await page.type('.devsite-search-field', 'Headless Chrome');

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = '.devsite-suggest-all-results';
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);

  // Wait for the results page to load and display the results.
  const resultsSelector = '.gsc-results .gs-title';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  const links = await page.evaluate(resultsSelector => {
    return [...document.querySelectorAll(resultsSelector)].map(anchor => {
      const title = anchor.textContent.split('|')[0].trim();
      return `${title} - ${anchor.href}`;
    });
  }, resultsSelector);

  // Print all the files.
  console.log(links.join('\n'));

  await browser.close();
})();
```

### Default runtime settings

**1. Uses Headless mode**

Puppeteer launches Chromium in
[headless mode](https://developers.google.com/web/updates/2017/04/headless-chrome).
To launch a full version of Chromium, set the
[`headless`](https://pptr.dev/api/puppeteer.browserlaunchargumentoptions.headless)
option when launching a browser:

```ts
const browser = await puppeteer.launch({headless: false}); // default is true
```

**2. Runs a bundled version of Chromium**

By default, Puppeteer downloads and uses a specific version of Chromium so its
API is guaranteed to work out of the box. To use Puppeteer with a different
version of Chrome or Chromium, pass in the executable's path when creating a
`Browser` instance:

```ts
const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
```

You can also use Puppeteer with Firefox Nightly (experimental support). See
[`Puppeteer.launch`](https://pptr.dev/api/puppeteer.puppeteernode.launch) for
more information.

See
[`this article`](https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/)
for a description of the differences between Chromium and Chrome.
[`This article`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/chromium_browser_vs_google_chrome.md)
describes some differences for Linux users.

**3. Creates a fresh user profile**

Puppeteer creates its own browser user profile which it **cleans up on every
run**.

#### Using Docker

See our [guide on using Docker](https://pptr.dev/guides/docker).

#### Using Chrome Extensions

See our
[guide on using Chrome extensions](https://pptr.dev/guides/chrome-extensions).

## Resources

- [API Documentation](https://pptr.dev/api)
- [Guides](https://pptr.dev/category/guides)
- [Examples](https://github.com/puppeteer/puppeteer/tree/main/examples)
- [Community list of Puppeteer resources](https://github.com/transitive-bullshit/awesome-puppeteer)

## Contributing

Check out our [contributing guide](https://pptr.dev/contributing) to get an
overview of Puppeteer development.

## FAQ

Our [FAQ](https://pptr.dev/faq) has migrated to
[our site](https://pptr.dev/faq).
