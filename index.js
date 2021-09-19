const chalk = require("chalk");
var readLine = require('readline-sync');

var score = 0;
var name;
var questionOne = {
  question:"What is the name of the company where Jayasurya works?\n",
  answer:["TCS","Tata Consultancy Services"]
}
var questionTwo = {
  question:"What's the name of his Home City?\n",
  answer:["Mangaluru","Mangalore"]
}
var questionThree = {
  question:"Does he like going to the gym? \n",
  answer:["Yes","Y"]
}
var questionFour = {
  question:"Does he love Python? \n",
  answer:["Yes","Y"]
}
var questionFive = {
  question:"What's 8+6 (Just to prove you are not a bot) \n",
  answer:["14","fourteen"]
}

var questions = [questionOne, questionTwo, questionThree,questionFour,questionFive]

var topScorers = [{
  name:"Jayasurya",
  score:questions.length
}]

function welcome() {
name = readLine.question(chalk.bgCyan(" Hello.. What's your name? \n"));
console.log(chalk.bgCyan("\nHey there "+name+". Welcome to the Quiz App : DYKJ (Do you know Jayasurya)"));
}

function play(question, answer) {
  var userAns = readLine.question(chalk.yellow("\n"+question));

  var ansFlag = 0;
  for(var i=0; i<answer.length;i++) {
  if (userAns.toLowerCase() == answer[i].toLowerCase()) {
    console.log(chalk.green("\nYayy!! That's correct "));
    score += 1;
    ansFlag = 1;
  }
  }
  if(ansFlag == 0) {
    console.log(chalk.red("\nOops!! It's a wrong answer"));
    console.log(chalk.yellow("\nThe correct answer is \""+answer.join("\" or \"")+"\""));
  }

  console.log("\nCurrent Score: "+score);
  console.log("---------------------------------------------");
}

function start() {
  for(var i=0; i<questions.length; i++) {
    play(questions[i].question,questions[i].answer)
  }
}

function finalScore() {
  console.log(chalk.bgCyan("\n Your final score is " + score + " "));

  topScorers.push({name:name,score:score});

  console.log("\nTOP SCORERS - ");
  var maxScore = 0;
  for(var i =0;i<topScorers.length;i++) {
    console.log(topScorers[i].name +" - "+topScorers[i].score)
    if(topScorers[i].score > maxScore) {
      maxScore = topScorers[i].score;
    }
  }

  if(score>=maxScore){
    console.log(
      chalk.green("\nWoah!! You are the new TOPSCORER.\nWell done.. You must be friends with Jayasurya ")
    );
  }
  else if(score>=3){
    console.log(chalk.yellow("\nYou did better than the rest."));
  }

  console.log(chalk.bgCyan("\n Thank you for playing!!! "));
}

welcome()
start()
finalScore()