//2) Using WebdriverIO, assume there is a page with an input like <input data-field="score" />. How would you set a value of 123 in the input? Then, after you set the value how would you get the value of that same input?

describe("Task two test suite", () => {
  it("Set input & get value", async () => {
    // In this example I used an example webpage by TestCafe tutorials.
    let example = "https://devexpress.github.io/testcafe/example/";
    await browser.url(example);

    // Here the input element is selected by its id attribute.
    let selector = await $("#developer-name");
    await selector.setValue("123");
    await selector.getValue();
  });
});
