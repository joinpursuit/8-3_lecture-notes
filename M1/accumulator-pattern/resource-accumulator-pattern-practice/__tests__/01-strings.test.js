const {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
} = require("../src/01-strings");

describe("combineAllWords()", () => {
  test("it should combine all the words into one big string", () => {
    const scenario1 = combineAllWords(["later", "create", "nineteen"]);
    expect(scenario1).toEqual("latercreatenineteen");

    const scenario2 = combineAllWords(["a", "b", "c"]);
    expect(scenario2).toEqual("abc");
  });

  test("it returns an empty string if the array is empty", () => {
    const scenario = combineAllWords([]);
    expect(scenario).toEqual("");
  });
});

describe("repeatAllWords()", () => {
  test("it returns an array of repeated words", () => {
    const scenario1 = repeatAllWords(["later", "create", "nineteen"]);
    expect(scenario1).toEqual([
      "laterlater",
      "createcreate",
      "nineteennineteen",
    ]);

    const scenario2 = repeatAllWords(["a", "b", "c"]);
    expect(scenario2).toEqual(["aa", "bb", "cc"]);
  });

  test("it returns an empty array if the array is empty", () => {
    const scenario = repeatAllWords([]);
    expect(scenario).toEqual([]);
  });
});

describe("getSmallWords()", () => {
  test("it returns an array of only those words that have four characters or less", () => {
    const scenario1 = getSmallWords(["later", "create", "nineteen"]);
    expect(scenario1).toEqual([]);

    const scenario2 = getSmallWords(["a", "b", "c"]);
    expect(scenario2).toEqual(["a", "b", "c"]);

    const scenario3 = getSmallWords(["big", "small", "medium"]);
    expect(scenario3).toEqual(["big"]);
  });

  test("it returns an empty array if the array is empty", () => {
    const scenario = getSmallWords([]);
    expect(scenario).toEqual([]);
  });
});

describe("findWordWithCharacter()", () => {
  test("it returns the first word that includes the given character", () => {
    const scenario1 = findWordWithCharacter(
      ["later", "create", "nineteen"],
      "e"
    );
    expect(scenario1).toEqual("later");

    const scenario2 = findWordWithCharacter(["a", "b", "c"], "c");
    expect(scenario2).toEqual("c");

    const scenario3 = findWordWithCharacter(["big", "small", "medium"], "m");
    expect(scenario3).toEqual("small");
  });

  test("it returns `null` if the word cannot be found", () => {
    const scenario = findWordWithCharacter(["big", "small", "medium"], "z");
    expect(scenario).toEqual(null);
  });
});

describe("allWordsAreAllCaps()", () => {
  test("it returns `true` if all words are in all caps", () => {
    const scenario = allWordsAreAllCaps(["LATER", "CREATE"]);
    expect(scenario).toEqual(true);
  });

  test("it returns `false` if any lowercase letters are present", () => {
    const scenario1 = allWordsAreAllCaps(["A", "B", "c"]);
    expect(scenario1).toEqual(false);

    const scenario2 = allWordsAreAllCaps(["Big", "Small", "Medium"]);
    expect(scenario2).toEqual(false);
  });
});

describe("getLongestWord()", () => {
  test("it returns the first longest word", () => {
    const scenario1 = getLongestWord(["later", "create", "nineteen"]);
    expect(scenario1).toEqual("nineteen");

    const scenario2 = getLongestWord(["a", "b", "c"]);
    expect(scenario2).toEqual("a");

    const scenario3 = getLongestWord(["later", "maxim", "irate"]);
    expect(scenario3).toEqual("later");
  });
});
