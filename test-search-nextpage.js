const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.goto("https://www.target.com/");

  const searchInput = "iphone 13";

  try {
    await page.waitForSelector("form input#search");
    await page.focus("form input#search");
    await page.keyboard.type(searchInput);
    await page.waitForSelector('form button[type="submit"]');
    await page.click('form button[type="submit"]');
    console.log("Test success: search input & submit");
  } catch (error) {
    console.log("Test failed: search input & submit");
  }

  await page.waitForTimeout(5000);

  try {
    await page.waitForSelector('div[data-test="pagination"]');
    await page.waitForSelector('button[data-test="next"]');
    await page.click('button[data-test="next"]');
    console.log("Test success: go to next page");
  } catch (error) {
    console.log("Test failed: go to next page");
  }

  await page.waitForTimeout(5000);

  try {
    await page.waitForSelector('#headerPrimary a[data-test="@web/AccountLink"]');
    await page.click('#headerPrimary a[data-test="@web/AccountLink"]');
    console.log("Test success: click on Sign in");
  } catch (error) {
    console.log("Test failed: click on Sign in");
  }

  await page.waitForTimeout(5000);
  await browser.close();
})();
