const {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
} = require("../src/02-objects");

const people = [
  {
    age: 24,
    name: "Hendrix Winters",
    email: "hendrixwinters@gmail.com",
    address: "637 Tompkins Place, Elfrida, Arizona, 43832",
  },
  {
    age: 37,
    name: "Erin Atkins",
    email: "erinatkins@gmail.com",
    address: "123 Ruby Street, Watrous, Minnesota, 59421",
  },
  {
    age: 24,
    name: "Tran Marks",
    email: "tranmarks@gmail.com",
    address: "730 Lafayette Walk, Sexton, Tennessee, 44734",
  },
  {
    age: 22,
    name: "Mendoza Benson",
    email: "mendozabenson@yahoo.com",
    address: "789 Harkness Avenue, Brambleton, Marshall Islands, 61821",
  },
  {
    age: 22,
    name: "Craig Landry",
    email: "craiglandry@yahoo.com",
    address: "440 Losee Terrace, Sylvanite, Kansas, 61905",
  },
  {
    age: 40,
    name: "Marquita Steele",
    email: "marquitasteele@gmail.com",
    address: "791 Rose Street, Benson, Virgin Islands, 95818",
  },
];

describe("getAllNames()", () => {
  test("it should return an array of all names", () => {
    const scenario = getAllNames(people);
    expect(scenario).toEqual([
      "Hendrix Winters",
      "Erin Atkins",
      "Tran Marks",
      "Mendoza Benson",
      "Craig Landry",
      "Marquita Steele",
    ]);
  });
});

describe("findPersonByName()", () => {
  test("it should return the object that has a matching name", () => {
    const scenario = findPersonByName(people, "Marquita Steele");
    expect(scenario).toEqual({
      age: 40,
      name: "Marquita Steele",
      email: "marquitasteele@gmail.com",
      address: "791 Rose Street, Benson, Virgin Islands, 95818",
    });
  });

  test("it should return `null` if no name matches", () => {
    const scenario = findPersonByName(people, "Zac Robertson");
    expect(scenario).toEqual(null);
  });

  test("it should be case-insensitive", () => {
    const scenario = findPersonByName(people, "marquita steele");
    expect(scenario).toEqual({
      age: 40,
      name: "Marquita Steele",
      email: "marquitasteele@gmail.com",
      address: "791 Rose Street, Benson, Virgin Islands, 95818",
    });
  });
});

describe("getPeopleUnder25()", () => {
  test("it should return an array of all names", () => {
    const scenario = getPeopleUnder25(people);
    expect(scenario).toEqual([
      {
        age: 24,
        name: "Hendrix Winters",
        email: "hendrixwinters@gmail.com",
        address: "637 Tompkins Place, Elfrida, Arizona, 43832",
      },
      {
        age: 24,
        name: "Tran Marks",
        email: "tranmarks@gmail.com",
        address: "730 Lafayette Walk, Sexton, Tennessee, 44734",
      },
      {
        age: 22,
        name: "Mendoza Benson",
        email: "mendozabenson@yahoo.com",
        address: "789 Harkness Avenue, Brambleton, Marshall Islands, 61821",
      },
      {
        age: 22,
        name: "Craig Landry",
        email: "craiglandry@yahoo.com",
        address: "440 Losee Terrace, Sylvanite, Kansas, 61905",
      },
    ]);
  });
});

describe("getPeopleWithGmail()", () => {
  test("it should return an array of all names", () => {
    const scenario = getPeopleWithGmail(people);
    expect(scenario).toEqual([
      {
        age: 24,
        name: "Hendrix Winters",
        email: "hendrixwinters@gmail.com",
        address: "637 Tompkins Place, Elfrida, Arizona, 43832",
      },
      {
        age: 37,
        name: "Erin Atkins",
        email: "erinatkins@gmail.com",
        address: "123 Ruby Street, Watrous, Minnesota, 59421",
      },
      {
        age: 24,
        name: "Tran Marks",
        email: "tranmarks@gmail.com",
        address: "730 Lafayette Walk, Sexton, Tennessee, 44734",
      },
      {
        age: 40,
        name: "Marquita Steele",
        email: "marquitasteele@gmail.com",
        address: "791 Rose Street, Benson, Virgin Islands, 95818",
      },
    ]);
  });
});
