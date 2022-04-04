The goal of today's lesson is going to be to use the existing form on the page to add a Pokemon's name and image to the page.

1. Start by wrapping the call to the API inside of a function called `getPokemonByID()`.
   ```
   This function will take a number and make a request to the PokeAPI using that number. For example, if the number given is `35`, the request would include the path `pokemon/5`.
   ```
1. Add an event listener to the form so that when it submits, the page does not refresh.

1. Inside of the event listener, call your `getPokemonByID()` function. You may give it the value of `35`. At the moment, you should only see the data logged of the pokemon.

1. Update your code so that `getPokemonByID()` uses the value entered into the form. After the form is submitted, clear the value inside of the input.

1. Update your code so that when there is an error with your `fetch()` request, it shows that there is a problem to the user. You can use the following HTML structure to format your error, replacing `ERROR_MESSAGE` with the actual error message received.

   ```html
   <section class="error">
     <p>There was an error!</p>
     <p class="message">ERROR_MESSAGE</p>
   </section>
   ```

   - Where did you choose to put this code? Why?
   - Where did you choose to put the HTML you created? Why?

1. Update your code so that when there is a successful result from your `fetch()` request, it displays an image of the pokemon, it's name, and its order. You can use the following HTML structure to format your error. Replace `SPRITE_IMAGE` with the URL of a sprite, `NAME` with the pokemon's name, and `ORDER` with the order of the pokemon.

   ```html
   <article>
     <img src="SPRITE_IMAGE" alt="NAME" />
     <h2>NAME (#ORDER)</h2>
   </article>
   ```

   - Where did you choose to put this code? Why?
   - Where did you choose to put the HTML you created? Why?

1. Reflect on the code you've written so far. How could it be improved?

1. Reflect on the user experience of your application so far. How could it be improved?

1. What are some additional features you could add to this application?
