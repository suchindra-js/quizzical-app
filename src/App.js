import React from 'react'
import Quiz from './components/Quiz'
import Intro from './components/Intro'
import { nanoid } from 'nanoid'

export default function App() {

  const [quiz, setQuiz] = React.useState(JSON.parse(localStorage.getItem("quiz")) || [])
  const [revealAns, setrevealAns] = React.useState(JSON.parse(localStorage.getItem("revealAns")) || false)
  const [totalScore, setTotalScore] = React.useState(JSON.parse(localStorage.getItem("totalScore")) || 0)

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
    localStorage.setItem("revealAns", JSON.stringify(revealAns))
    localStorage.setItem("totalScore", JSON.stringify(totalScore))
  }, [quiz, revealAns, totalScore])  

  function selectAns(id, answer) {
    if (!revealAns) {
      setQuiz(prevQuiz => prevQuiz.map(quiz => {
        return quiz.id === id ? {...quiz, clicked: answer} : quiz
      }))
    }
  }

  function CheckAns() {
    scoreCounter()
    setrevealAns(true)
  }

  function scoreCounter() {
    console.log("ran")
    let totalMark = 0
    quiz.map(quiz => quiz.clicked === quiz.correctAns ? totalMark++ : totalMark)
    setTotalScore(totalMark)
  }

  function reset() {
    setQuiz([])
    setrevealAns(false)
    setTotalScore(0)
  }
   
  const quizList = quiz.map(quiz => {
    const ansArray = [...quiz.incorrectAns]
    ansArray.push(quiz.correctAns)
    return <Quiz
      key = {quiz.id}
      id = {quiz.id}  
      question={quiz.question}
      answers={ansArray} 
      correctAns = {quiz.correctAns}
      clicked = {quiz.clicked}
      selectAns={selectAns}
      revealAns = {revealAns}

    />
  })

  return (
    quiz.length <= 0 ? 
    <Intro handleClick={createNewQuiz}/> :
    <div className='quiz-list'>
      {quizList}
      {!revealAns ?
      <button onClick={CheckAns}>Check Answers</button> :
      <>
        <p>You scored {totalScore}/5 correct answers</p>
        <button onClick={reset}>Play Again</button>
      </>}
    </div>
  );
}


