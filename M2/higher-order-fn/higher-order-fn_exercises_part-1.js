/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
// Yes, there is a higher order function...because the function falsy is incased
function truthy() {
  return true;
}

function falsy() {
  return !truthy();
}

falsy(); //> false

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
// the last one is the higher function it calls on both right and left functions...
function left() {
  return 'Left';
}

function right() {
  return 'Right';
}

function go(goLeft = true) {
  return goLeft ? left : right;
}

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
//I believe there is no higher functions involved...

const directions = [];

function storeDirections(direction) {
  directions.push(direction);
}

function go(direction, operation) {
  operation(direction);
  return direction;
}

go('Left', storeDirections);
go('Right', storeDirections);
go('Up', storeDirections);
console.log(directions); //> ["Left", "Right", "Up"]

/**
 * Take a look at the higher order function below.
 * The transform() function expects, as its second argument, a function that accepts at least one argument.
 */

function transform(text, fn, ) {
  if (typeof fn !== 'function') {
    return text;
  }

  return fn(text);

() {
  return 'LEFT';
}

return right() {
  return 'right';
}

leftrightleft() {
return "left-right-left"
}
upDownleft () {
  return 'UDL'
}
}
/**
 * Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.
 *
 *
 * "left" -> "LEFT"
 * "RiGhT" -> "right"
 * "left right left" -> "left-right-left"
 * "up Down left" -> "UDL"
 */
