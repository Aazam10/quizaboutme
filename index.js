var readlineSync=require("readline-sync")
const chalk = require('chalk');

var userName=readlineSync.question("Hi!what is your name?"+"\n");
console.log("Welcome" + " "+chalk.blue(userName)+" Lets see how well you know me?\n");
console.log("The answers are case sensitive so type the answer as you see in the options\n");
var questionOne={
  question:"What is my age?\n a. 22\n b. 23\n c. 24\n",
  answer:"22"
}

var questionTwo={
  question:"In which city did I complete my graduation?\na. Pune\nb. Mumbai\nc. Nagpur \n",
  
  answer:"Pune"
}
var questionThree={
  question:"Where do I work?\na. Accenture\nb. Microsoft\nc. Infosys"+"\n",
  answer:"Infosys"
}
var questionFour={
  question:"Which is my favorite football club?\na. Arsenal\nb. Chelsea\nc. Liverpool\n",
  answer:"Chelsea"
}
var questionFive={
  question:"What was the last place I went to for vacation?\na. Manali\nb. Goa\nc. Darjeeling\n",
  answer:"Goa"
}
var score=0;
function play(question,answer){
var userAnswer=readlineSync.question(question);
console.log(userAnswer);
if(userAnswer===answer){
  console.log(chalk.green("Your answer is right"));
  score=score+1;
  console.log(chalk.yellowBright("Your current score is "+score));
  console.log("------------------------------");
}
else{
  console.log(chalk.red("Your answer is wrong"));
  console.log(chalk.yellowBright("Your current score is "+score));
  console.log("------------------------------");
}
}
var quiz=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(i=0;i<quiz.length;i++){
  play(quiz[i].question,quiz[i].answer);

}

console.log(chalk.cyanBright("Your final score is "+score));