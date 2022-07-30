# Automated end-to-end(e2e) testing with Puppeteer and target.com website

## Features
- Get homepage screenshot. (headless)
- Get products price and save into text file. (headless)
- E2E testing search and navigate site. (browser)

## Run Scripts

**Requirements**
- [NodeJS](https://nodejs.org/)
- [Puppeteer](https://pptr.dev/)
  ```
  npm i puppeteer
  ```

1. Get homepage screenshot.
  ```
  node index.js
  ```
2. Get products price and save into text file.
  ```
  node get-items-price.js
  ```
3. E2E testing search and navigate site.
  ```
  node test-search-nextpage.js
  ```

## Screenshot
![](/target.com-1659166795942.png)


## Reference Links
- https://www.target.com/
- https://pptr.dev/
- https://pptr.dev/api/
