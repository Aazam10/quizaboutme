var readlineSync=require("readline-sync")

var userName=readlineSync.question("Hi!what is your name?"+"\n");
console.log("Welcome" + " "+userName+" Lets see how well you know me?");
var questionOne={
  question:"What is my age?\n a. 22\n b. 23\n c. 24\n",
  answer:"22"
}

var questionTwo={
  question:"In which city did I coplete my graduation?\na. Pune\nb. Mumbai\nc. Nagpur \n",
  
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
  console.log("Your answer is right");
  score=score+1;
  console.log("Your current score is "+score);
}
else{
  console.log("Your answer is wrong");
  console.log("Your current score is "+score);
}
}
var quiz=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(i=0;i<quiz.length;i++){
  play(quiz[i].question,quiz[i].answer);

}

console.log("Your final score is "+score);