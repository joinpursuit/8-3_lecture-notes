/**
 * npm
 *  Node Package Manager: A package is similar to a library -- useful reference helper methods to facilitate building an app on top of. Calculus app makes use of a calculus library so that the dev doesn't have to reinvent the wheel.
 *    - React is a NPM package
 *      - Harder to break
 *      - React is designed to write front ends faster, and for them to be more efficient.
 *
 *  What does `npm init` do?
 *    Simlar to `git init` It sets up a new or existing npm package/project.
 *  Describe the purpose of the package.json file?
 *
 *  How can you create scripts via the package.json file?
 *    The heart/manifest/map of any node project, the configuration (config)
 *       - records metadata
 *          - title, author, licenses, the main script, etc.
 *          - scripts
 *             - tests
 *             - running the app
 *          - about publishing the package
 *          - manages dependencies and versions
 *
 * npx: Node Package Execute -- temporarily installs a package, and executes a package function
 *  - Do you have to run npm init before running npx?
 *    - No, but you must have npm and npx installed
 *      - When you install Node, npm and npx are also installed
 *  - What does the create-react-app package do?
 *    - `npx create-react-app my-app`
 *      - Temporarily installs react, and creates a new react app
 *
 *  - What do the export, import, and default do?
 *    - Export keyword allows making a function or set of functions available to other files in an npm project
 *    - import allows importing other functions into a specific file
 *    - export default keywords combined signify that a single function is being made available from a single file
 *
 * What is JSX? JavaScript XML (eXtensible Markup Language)
 *  - We can write markup (that can be compiled as HTML) inside our JavaScript code
 *  - Separation of Concerns: Each conceptual piece of an app is organized in one discrete structure/file (keeps all the component code in one place, js, jsx)
 *
 * What are React Elements? The smallest building block of a React UI
 */
const element = <p>AC</p>;

/**
 * What are React Components? A blueprint for building a specific type of UI feature
 *  - Made up of elements
 *  - A reusable class/function that we can use to generate our React UI elements in JSX, than are then compiled as HTML
 *  e.g.: Button Component --> use it to generate all the buttons in our calculator. Each button has a set of properties that are required to generate the component successfully:
 *    - Properties: width, height, background color, symbol, value, etc
 *
 *  - Does each component in react needs its own js file? That's a good practice!
 *
 * What is the relationship between the React Virtual DOM and the DOM?
 *  - What is the DOM? Document Object Model
 *    - We use the following features to update, create, delete, and watch elements in the DOM:
 *      - Select/update elements: .querySelector(), .append()
 *      - Create elements: .createElement()
 *      - Delete elements: .remove()
 *      - Watch out for an action/user input: .addEventListener()
 *  - Virtual DOM a virtual representation of the entire DOM of a React app.
 *    - Virtual DOM can be rendered MUCH MORE quickly than the DOM
 *      - So if we update one single component in our React app, if we just update the entire DOM, this will take a long time
 *      - Instead, we update the entire virtual DOM, then compare it to the DOM,
 *      - And only update the differences in the DOM
 *  - Where is the virtual DOM code located? Located inside the React NPM package
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *  Can we use react to build a better weather app? YES!
 *  Will we be viewing a walkthrough of installing react?
 *  Is all modern web design done with either React or Angular?
 */
