console.log(document);

// Read 1 element
let span = document.querySelector('span');

// Read multiple elements
let spans = document.querySelectorAll('span');

// Print span value (HTMLSpanElement)
console.log(`1st span: ${span}`);

// Print span data
console.log(span);

// Print all span values (NodeList)
console.log(`All spans:${spans}`);

// Loop through all the spans (NodeList)
// NodeList method forEach (not the same as Array.forEach)
spans.forEach((s) => {
  // Print each span data
  // Access HTMLSpanElement properties using
  // bracket notation
  // innerText returns any Text inside a HTMLElement
  console.log(s['innerText'].split(' '));
  // ... OR dot notation, like any other object!
  // innerHTML returns the HTML inside a HTMLElement
  console.log(s.innerHTML);

  console.log(s.textContent.split(' '));
});

// Print all span data
console.log(spans);

// Remove one element
let div = document.querySelector('div');
// div.remove();
console.log(document.body);

// alert('should I remove all spans?');

// Remove all span elements
// spans.forEach((s) => s.remove());

// Preview of removing an element by class name
let aClass = document.getElementsByClassName('a');

console.log(aClass);
aClass[0].remove();
