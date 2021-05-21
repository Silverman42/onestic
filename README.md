# Challenge VueJS Frontend Developer

## Context

You've just started to work with _Company Inc._, an italian restaurant franchise that want to have
presence on Internet and bring some customers to their large network of restaurants trying to create
a viral campaign of marketing.

At this point, they have an unfinished Single Page Application without the main feature to the campaign:
a `Pasta Carbonara meal calculator`.
They have a "secret" formula with all the required ingredients, and you should introduce the quantity you own. Then,
it will give you the number of meals you can cook at home. Once the calculator gives you the number of meals you can cook,
the site will navigate to a new page with the "secret" formula exposed, and the exact quantities of each ingredient
you have to use.

The boss is very funny and would like to include a _Joke of the Day_ on every Store showed in the list of `Our Stores`
section. Also, you can include this component in the results page with the "secret" formula.
The API where you can obtain the _Joke of the Day_ is from `https://api.jokes.one/jod?category=knock-knock`. Take in
mind that the API has a limit of usage, and you should take the best solution if the site reaches too many visits.

## Challenge

Currently, you should focus to complete the missing parts:

- The RecipeForm component has the form where the user must introduce the ingredients and calculate the meals. You must
  add the logic for the submit button click. In the Carbonara view component's data method, you will find the "secret"
  formula. (As an example, if the user introduce: pasta 1040, bacon 410, eggs 3, milk 405, butter 1010, oil 300, the
  calculation should output "2 meals").
- Create the new page that should be redirected when the user submits the ingredients, showing the restaurants' info,
  using the Banner component to show the content.
- Add an input filter in Stores where the user can search for a specific Store name. Also, in Desktop devices, the list
  should have 4 columns instead of 1.

## Optimization steps taken

- Removed lodash and replaced it ES6 Array.map function
- Removed moment and replaced it Intl.DateTimeFormat() function
- Asynchronuosly imported the stores array from the array file
- Added pagination functionality to view all the stores in the stores page rather than loading all stores at once
