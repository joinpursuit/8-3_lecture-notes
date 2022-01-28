// Below is one problem from the word problems portion of the project
// With your partner(s), please:

// 1. Review the problem prompt
// 2. Take a look at the existing code, including the helper functions. Can you describe what's happening and how the code works?
// 3. Check if the code is working. There are no tests, you will have to check by calling gradeAssignments with example input and determining for yourself whether you think it's working.
// 4. Refactor the code so that it works for percentage assignments. Don't just paste in a separate solution, try to write code that "fits" with the way the existing code is organized.
// 5. Complete the getOtherGrade helper function. Check your work by calling it with some examples to make sure it returns what you want!
// 6. Use the getOtherGrade function to complete gradeAssignments
// 7. Call gradeAssignments with some example inputs to convince yourself that the function works as it's supposed to!

/**
 * gradeAssignments()
 * ---------------------
 * An online learning management system needs a way to quickly add the current status to a list of assignments. Depending on the `kind` of assignment, different statuses should be applied.
 *
 * Write an algorithm that adds a key of `status` to each object in an array of objects. Each object represents a single assignment submitted by a student.
 *
 * - If the assignment has a `kind` of `"PASS-FAIL"`, set the `status` value to `"PASSED"` if the `score.received` equals the `score.max`. Otherwise, set that `status` to be `"FAILED"`.
 * - If the assignment has a `kind` of `"PERCENTAGE"`, set the `status` value to be `"PASSED: <percentage>"` if the student scored at least 80.0%. The `<percentage>` should be set to one decimal place. If the student scored less than 80.0%, set the status to `"FAILED: <percentage>"`.
 * - If the assignment has any other `kind` than the two above, set the `status` value to equal `"SCORE: <received>/<max>"`, where `<received>` is the `score.received` value and `<max>` is the `score.max` value.
 *
 * Then, return the overall array with all modified assignments.
 *
 * @param {Object[]} assignments - An array of assignment objects.
 * @param {string} assignments[].kind - The type of assignment. Could be "PASS-FAIL", "PERCENTAGE", or another value.
 * @param {Object} assignments[].score - An object that contains the scores of the assignment.
 * @param {number} assignments[].score.received - The score received on the assignment.
 * @param {number} assignments[].score.max - The maximum score that could be received on the assignment.
 * @returns {Object[]} The original array of assignment objects, with a new key of `status` added to each object.
 * 
 * EXAMPLE:
 *  const assignments = [
      { kind: "PASS-FAIL", score: { received: 4, max: 4 } },
      { kind: "PERCENTAGE", score: { received: 8, max: 10 } },
      { kind: "ESSAY", score: { received: 4, max: 5 } },
    ];
    gradeAssignments(assignments);
    //> [
    //>   { 
    //>     kind: "PASS-FAIL",
    //>     score: { received: 4, max: 4 },
    //>     status: "PASSED",
    //>   },
    //>   { 
    //>     kind: "PERCENTAGE",
    //>     score: { received: 7, max: 9 },
    //>     status: "FAILED: 77.8%",
    //>   },
    //>   { 
    //>     kind: "ESSAY",
    //>     score: { received: 4, max: 5 },
    //>     status: "SCORE: 4/5",
    //>   },
    //> ];
 */
function gradeAssignments(assignments) {
  for (const assignment of assignments) {
    if (assignment.kind === "PASS-FAIL") {
      assignment.status = getPassFailGrade(assignment);
    } else if (assignment.kind === "PERCENTAGE") {
      getPercentageGrade();
    } else {
    }
  }

  return assignments;
}

function getPassFailGrade(assignment) {
  if (assignment.score.received === assignment.score.max) {
    return "PASSED";
  } else {
    return "FAILED";
  }
}

function getPercentageGrade(assignment) {
  let percent = assignment.score.received / assignment.score.max;
  percent = (percent * 100).toFixed(1);

  if (percent < 80) {
    return `PASSED: ${percent}%`;
  } else {
    return `FAILED: ${percent}%`;
  }
}

function getOtherGrade(assignment) {}
