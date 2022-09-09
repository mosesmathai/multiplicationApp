const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const questionElement = document.getElementById('question')
const formElement = document.getElementById('form')
const inputElement = document.getElementById('input')
const scoreElement = document.getElementById('score')
let score = JSON.parse(localStorage.getItem('score'))
scoreElement.innerText = `Score: ${score}`

if (!score) {
  score = 0
}

questionElement.innerText = `What is ${num1} multiplied by ${num2}?`

const correctAnswer = num1 * num2

function userinput() {
  const userAnswer = +inputElement.value
  if (userAnswer === correctAnswer) {
    score++
    updateLocalStorage()
  } else {
    score--
    updateLocalStorage()
  }
}

function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score))
}

formElement.addEventListener('submit', userinput)