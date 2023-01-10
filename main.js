const choices = ['rock', 'paper', 'scissors'];
let outcome = document.querySelector(".outcome-box")

function handleClick(btn) {
  let userChoice = btn.value
  let computerChoice = getComputerChoice()
  if (userChoice === computerChoice) {
    outcome.insertAdjacentHTML('beforeend', `
    <p>you've chosen: ${userChoice}</p>
    <p>computer's chosen: ${computerChoice}</p>
    <h1>Draw!</h1>`)
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      outcome.insertAdjacentHTML('beforeend', `
      <p>you've chosen: ${userChoice}</p>
<p>computer's chosen: ${computerChoice}</p>
      <h1>You lose!</h1>`)
    } else {outcome.insertAdjacentHTML('beforeend', `
    <p>you've chosen: ${userChoice}</p>
<p>computer's chosen: ${computerChoice}</p>
    <h1>You win!</h1>`)}
  }
  
  else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      outcome.insertAdjacentHTML('beforeend', `
      <p>you've chosen: ${userChoice}</p>
<p>computer's chosen: ${computerChoice}</p>
      <h1>You win!</h1>`)
    } else {outcome.insertAdjacentHTML('beforeend', `
    <p>you've chosen: ${userChoice}</p>
<p>computer's chosen: ${computerChoice}</p>
    <h1>You lose!</h1>`)}
  }
  
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      outcome.insertAdjacentHTML('beforeend', `
      <p>you've chosen: ${userChoice}</p>
<p>computer's chosen: ${computerChoice}</p>
      <h1>You lose!</h1>`)
    } else {outcome.insertAdjacentHTML('beforeend', `
    <p>you've chosen: ${userChoice}</p>
<p>computer's chosen: ${computerChoice}</p>
    <h1>You win!</h1>`)}
  }
  
  else {
    outcome.insertAdjacentHTML('beforeend', `Something is wrong with code idk`)
  }
}

function getComputerChoice() {
  // outputs 0, 1, 2
  let computerChoice = choices[Math.floor(Math.random() * 3)]
  console.log(computerChoice)
  return computerChoice
}
