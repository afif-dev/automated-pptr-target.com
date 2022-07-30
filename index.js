const puppeteer = require("puppeteer");

const time = new Date().getTime();

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.target.com/");
  await page.screenshot({ path: `target.com-${time}.png` });
  console.log("Successfully, saved screenshot!");
  await browser.close();
})();
