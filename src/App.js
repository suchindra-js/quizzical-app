import React from 'react'
import Quiz from './components/Quiz'
import Intro from './components/Intro'
import { nanoid } from 'nanoid'

export default function App() {

  const [quiz, setQuiz] = React.useState(JSON.parse(localStorage.getItem("quiz")) || [])
  const [ansReveal, setAnsReveal] = React.useState(JSON.parse(localStorage.getItem("ansReveal")) || false)
  const [correctAns, setCorrectAns] = React.useState(JSON.parse(localStorage.getItem("correctAns")) || 0)

  function createNewQuiz() {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setQuiz(
        data.results.map(quiz => ({
          id: nanoid(),
          question: quiz.question,
          correctAns: quiz.correct_answer,
          incorrectAns: quiz.incorrect_answers,
          clicked: false
        }))
      ))
  }

  React.useEffect(() => {
    localStorage.setItem("quiz", JSON.stringify(quiz))
    localStorage.setItem("ansReveal", JSON.stringify(ansReveal))
    localStorage.setItem("correctAns", JSON.stringify(correctAns))
  }, [quiz, ansReveal, correctAns])  

  function selectAns(id, answer) {
    if (!ansReveal) {
      setQuiz(prevQuiz => prevQuiz.map(quiz => {
        return quiz.id === id ? {...quiz, clicked: answer} : quiz
      }))
    }
  }

  function CheckAns() {
    markCounter()
    setAnsReveal(true)
  }

  function markCounter() {
    console.log("ran")
    let totalMark = 0
    quiz.map(quiz => quiz.clicked === quiz.correctAns ? totalMark++ : totalMark)
    setCorrectAns(totalMark)
  }

  function reset() {
    setQuiz([])
    setAnsReveal(false)
    setCorrectAns(0)
  }
   
  const quizList = quiz.map(quiz => {
    const ansArray = [...quiz.incorrectAns]
    ansArray.push(quiz.correctAns)
    return <Quiz
      key = {quiz.id}
      id = {quiz.id}  
      answers={ansArray} 
      question={quiz.question}
      selectAns={selectAns}
      clicked = {quiz.clicked}
      ansReveal = {ansReveal}
      correctAns = {quiz.correctAns}

    />
  })

  return (
    quiz.length <= 0 ? 
    <Intro handleClick={createNewQuiz}/> :
    <div className='quiz-list'>
      {quizList}
      {!ansReveal ?
      <button onClick={CheckAns}>Check Answers</button> :
      <>
        <p>You scored {correctAns}/5 correct answers</p>
        <button onClick={reset}>Play Again</button>
      </>}
    </div>
  );
}


