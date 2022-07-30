const fs = require("fs");
const puppeteer = require("puppeteer");
const urls = [
  "https://www.target.com/p/apple-ipad-mini-wi-fi-2021-model/-/A-84619867",
  "https://www.target.com/p/apple-iphone-13-pro/-/A-84616122",
  "https://www.target.com/p/tandera-mesh-ergonomic-swivel-office-chair-mibasics/-/A-84169920",
  "https://www.target.com/p/vinsetto-high-back-executive-office-chair-ergonomic-leather-computer-desk-chair-with-adjustable-height-removable-headrest-and-360-swivel-wheels-deep-grey/-/A-86200401",
  "https://www.target.com/p/de-longhi-combination-espresso-coffee-machine-stainless-steel-bco430/-/A-53159823",
  "https://www.target.com/p/nespresso-vertuo-chrome-by-breville/-/A-15725476",
];

(async () => {
  let data = "";
  for (i = 0; i < urls.length; i++) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(urls[i]);

    data += `##-------Product ${i + 1}------##\n`;
    console.log(`##-------Product ${i + 1}------##`);

    // get page url
    console.log("Url:", page.url());
    data += `Url: ${page.url()}\n`;

    //   get product
    //   - get name
    try {
      await page.waitForSelector("h1 span");
      const productTitle = await page.$eval("h1 span", (el) => el.innerText);
      console.log("Title:", productTitle);
      data += `Title: ${productTitle}\n`;
    } catch (error) {
      console.log("Title: none");
      data += `Title: none\n`;
    }
    //   - get price
    try {
      await page.waitForSelector('span[data-test="product-price"]');
      const productPrice = await page.$eval('span[data-test="product-price"]', (el) => el.innerText);
      console.log("Price:", productPrice);
      data += `Price: ${productPrice}\n`;
    } catch (error) {
      try {
        await page.waitForSelector('span[data-test="da-price--retail"]');
        const productRetailPrice = await page.$eval('span[data-test="da-price--retail"]', (el) => el.innerText);
        console.log(productRetailPrice);
        data += `${productRetailPrice}\n`;
      } catch (error) {
        console.log("Price: undefined");
        data += `"Price: undefined"\n`;
      }
    }
    await browser.close();
  }

  // write to text file
  fs.writeFile("items-price.txt", data, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    // console.log(data);
    console.log("file written successfully!");
  });
})();
