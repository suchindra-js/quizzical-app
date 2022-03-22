# Notes App

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Interact with page
- Check their answer
- Check their score
- Replay the quiz

### Links

- Live Site URL: [https://tender-murdock-d8834b.netlify.app/](https://tender-murdock-d8834b.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Create React App](https://create-react-app.dev/) - Project Initialization

### What I learned

##### Making API Calls

To generate random questions and answers, API calls were made to Open Trivia Database. The returned object is also saved to Local storage.

```js
function createNewQuiz() {
  fetch(
    "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
  )
    .then((res) => res.json())
    .then((data) =>
      setQuiz(
        data.results.map((quiz) => ({
          id: nanoid(),
          question: quiz.question,
          correctAns: quiz.correct_answer,
          ansArray: (() => {
            const array = [...quiz.incorrect_answers];
            array.splice(Math.floor(Math.random() * 4), 0, quiz.correct_answer);
            return array;
          })(),
          clicked: false,
        }))
      )
    );
}
```
