# Three Cypress truths to guide test-reading comprehension

From [Introduction to Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)

## 1: Cypress is Asynchronous

```
To match the behavior of web applications, Cypress is asynchronous and relies on timeouts to know when to stop waiting on an app to get into the expected state. Timeouts can be configured globally, or on a per-command basis.
```

- Cypress wraps all DOM queries with robust retry-and-timeout logic that better suits how real web apps work.
- All DOM based commands automatically wait for their elements to exist in the DOM.
- We trade a minor change in how we find DOM elements for a major stability upgrade to all of our tests. Banishing flake for good!
- Any waiting or retrying that is necessary to ensure a step was successful must complete before the next step begins. If they don't complete successfully before the timeout is reached, the test will fail.

## 2: Cypress uses Promises

```
Cypress manages a Promise chain on the developer’s behalf.
```

- Each command yields a 'subject' to the next command, until the chain ends or an error is encountered.
- The developer should not need to use Promises directly, but understanding how they work is helpful!

## 3: Cypress commands may have implicit assertions

```
Some cypress commands use default assertions meaning that the expected result is not always immediately apparent.
```

- Cypress tests don't have to assert to be useful. This is because many commands have a built in [Default Assertion](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Default-Assertions).
- Assertions for commands are not explicitly mentioned

## Example Cypress Test Repo

[Kitchen Sink](https://github.com/cypress-io/cypress-example-kitchensink)

Live Kitchen Sink [Site](https://example.cypress.io/)
