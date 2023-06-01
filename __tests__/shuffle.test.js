const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("check that shuffle returns array", () =>{
    expect(shuffle()).toEqual([])
  })
  test("check if it matches", () => {
    expect(shuffle()).toMatch([])
  })
});
