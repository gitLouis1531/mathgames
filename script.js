var score = 0;
var maxAmount = 10;
var problemAmont = 0;
var operation = ['+','-','*','/'];
var number1 = 0;
var number2 = 0;
var opIndex = 0;
var ansIndex = 0;
var answer = 0;
var answer1 = 0;
var answer2 = 0;
var chooseAnswer1 = 0;
var chooseAnswer2 = 0;
var eleProblem = document.getElementById('problem');
var eleScoreTrue = document.getElementById('score-true');
var eleProblemAmount = document.getElementById('problem-amount');
var eleStartGame = document.getElementById('start-game');
var eleAnswer = document.getElementById('answer');
var eleChoose1 = document.getElementById('choose1');
var eleChoose2 = document.getElementById('choose2');
const randomNumber = (min,max) => {
  return Math.floor(Math.random() * (max-min+1)) + min;
}
const generateProblem = () => {
  problemAmont++;
  number1 = randomNumber(1,9);
  number2 = randomNumber(1,9);
  opIndex = randomNumber(0,3);
  ansIndex = randomNumber(0,1);
  if(operation[opIndex]==='+'){
    answer = number1+number2;
  } else if(operation[opIndex]==='-'){
    answer = number1-number2;
  } else if(operation[opIndex]==='*'){
    answer = number1*number2;
  } else if(operation[opIndex]==='/'){
    answer = parseFloat((number1/number2).toFixed(2));
  }
  if(ansIndex === 0){
   answer1 = answer;
   answer2 = answer + randomNumber(3,9);
  }else if(ansIndex === 1){
    answer1 = answer + randomNumber(3,9);
    answer2 = answer;
  }
  if(operation[opIndex]==='/'){
    answer1 = parseFloat(answer1).toFixed(2);
    answer2 = parseFloat(answer2).toFixed(2);
  }
  eleProblemAmount.innerText = problemAmont;
  eleProblem.innerText = `${number1}${operation[opIndex]}${number2}`;
  eleChoose1.innerText = answer1;
  eleChoose2.innerText = answer2;
}

const gamePlay = () => {
  eleStartGame.style.display = 'none';
  eleAnswer.style.display = 'flex';
  generateProblem();
}

const choose = (ans) => {
  if(ans === 1){
    if(parseFloat(answer1) === parseFloat(answer)){
      score++;
      eleScoreTrue.innerText = score;
    }
  }else if(ans === 2){
    if(parseFloat(answer2) === parseFloat(answer)){
      score++;
      eleScoreTrue.innerText = score;
    }
  }
  if(problemAmont<maxAmount) {
    generateProblem();
  }else{
    eleProblem.innerText = '...?...';
    eleStartGame.style.display = 'block';
    eleAnswer.style.display = 'none';
  }
}