const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });


  test("checking draw button", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css("#choices")).click();
    await driver.wait(
      until.elementTextContains(driver.findElement(By.id("choices"))),
      1000
    );
  });

  test("adds to duo", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.css("#player-duo")).click();
    await driver.wait(
      until.elementTextContains(driver.findElement(By.id("player-duo"))),
      1000
    );
  })
});

// test("notification appears when a movie is removed", async () => {
//   await driver.get("http://localhost:3000/");
//   await addMovie("The Matrix");
//   const addedMovie = await driver.wait(
//     until.elementLocated(By.css("#movies-list li")),
//     1000
//   );
//   await addedMovie.findElement(By.css("button.delete-btn")).click();
//   await driver.wait(
//     until.elementTextContains(driver.findElement(By.id("message")), "deleted!"),
//     1000
//   );
// });