// create a BASE_URL
const BASE_URL = 'https://opentdb.com/api.php';
const amountQueryParam = 'amount';
const amountValue = 10;

// create a category url
const CATEGORY_URL = 'https://opentdb.com/api_category.php';
const categoryQueryParam = 'category';
const categoryValue = null;

fetch(CATEGORY_URL)
  .then((response) => response.json())
  .then(renderCategories)
  .catch(renderError);

// render the categories to the form as options of select
function renderCategories(results) {
  // access categories and select
  const categories = results.trivia_categories;
  const select = document.querySelector('select');

  // loop through the categories and add each to the dom
  for (c of categories) {
    const option = document.createElement('option');
    option.value = c.id;
    option.textContent = c.name;
    select.append(option);
  }
}

// access the button via the dom
const getQuestionsButton = document.querySelector('form');
// create an event handler for the 'get new questions' button
getQuestionsButton.addEventListener('submit', (event) => {
  event.preventDefault();

  // remove old questions using a loop
  const main = document.querySelector('main');
  console.log(main);
  main.querySelectorAll('*').forEach((node) => {
    node.remove();
  });

  let url = `${BASE_URL}?${amountQueryParam}=${amountValue}`;
  let categoryId = event.target.category.value;
  console.log(categoryId);

  url =
    categoryId !== 'none' ? `${url}&${categoryQueryParam}=${categoryId}` : url;

  // the event handler will call the fetch request
  fetch(url)
    // add a .then chained method to process res as json
    .then((response) => response.json())
    // add a .then chained method to process the json --> call a function to update dom elements
    .then(renderQuestions)
    // add a .catch chained method to process any errors
    .catch(renderError);
});

// Create a helper function called renderResults(results) that
function renderQuestions(results) {
  const questions = results.results;

  // loop through the results from the API response
  for (let i = 0; i < questions.length; i++) {
    renderQuestion(questions[i], i);
  }
}

function renderQuestion(data, id) {
  // create an artile tag with class card per result
  const card = document.createElement('article');
  card.classList.add('card');
  // each card will have the following elements:
  // <h2>CATEGORY</h2>
  const category = document.createElement('p');
  category.textContent = data.category;
  // <p>QUESTION</p>
  const question = document.createElement('p');
  question.textContent = data.question;
  // <p>DIFFICULTY</p>
  const difficulty = document.createElement('p');
  let rating = data.difficulty;
  let difficultyCardClass = 'easy-card';
  let difficultyQuestionClass = 'easy';
  // add difficulty css class using switch statement
  switch (rating) {
    case 'hard':
      difficultyQuestionClass = 'hard';
      difficultyCardClass = 'hard-card';
      break;
    case 'medium':
      difficultyQuestionClass = 'medium';
      difficultyCardClass = 'medium-card';
      break;
  }
  difficulty.classList.add(difficultyQuestionClass);
  card.classList.add(difficultyCardClass);
  difficulty.textContent = rating;
  // <button>Show Answer</button
  const button = document.createElement('button');
  button.textContent = 'Show Answer';
  // <p class="hidden">CORRECT ANSWER</p>
  const correctAnswerObj = {
    answer: data.correct_answer,
    isCorrect: true,
  };

  // append each new element to the card
  card.append(category, question, difficulty, button);

  // create a answers array of objects with processed data and metadata
  const incorrectAnswers = data.incorrect_answers;
  const len = incorrectAnswers.length;
  let answers = [];

  for (let i = 0; i < len; i++) {
    answers[i] = {
      answer: incorrectAnswers[i],
      isCorrect: false,
    };
  }

  // add the correct answer into a random index position using splice and Math.random
  answers.splice(Math.floor(Math.random() * (len + 1)), 0, correctAnswerObj);

  // append each answer to the dom
  for (a of answers) {
    const answer = document.createElement('p');
    answer.textContent = a.answer;

    // adding the correct-id if the answer is the correct one
    if (a.isCorrect) {
      answer.setAttribute('id', `correct-${id}`);
    }
    card.append(answer);
  }

  // add an event handler to each card's 'show answer' button to show/hide visibility of the answer (use a single click to toggle the answer visibility)
  button.addEventListener('click', (event) => {
    const correctAnswer = document.getElementById(`correct-${id}`);
    console.log(correctAnswer);
    correctAnswer.classList.toggle('correct');
  });

  // append the article to the main tag
  const main = document.querySelector('main');
  main.append(card);
}

function renderError(error) {
  console.log(error);
}
