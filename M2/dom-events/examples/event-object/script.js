const headings = document.querySelectorAll('h1');

const printEventDetails = (e) => {
  console.log('event happened!');
  console.log('type: ', e.type);
  const target = e.target;
  console.log('target: ', target);
  console.log('target text content: ', target.textContent);
};

for (heading of headings) {
  heading.addEventListener('mouseover', printEventDetails);
}
