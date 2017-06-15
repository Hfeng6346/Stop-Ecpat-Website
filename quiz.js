function quiz(){
  this.score = 0;
  this.currentIndex = 0;
  this.questionList = shuffle({"1", "2", "3", "4", "5", "6", "7", "8"});
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function start(){
  var scenarioQuiz = new quiz();
  document.getElementById('defaultText').style.display = 'none';
  nextQuestion(scenarioQuiz);
}

function checkAnswer(ans){
  if(ans){

  }
}

function nextQuestion(scenarioQuiz){
  $("#scenario" + scenarioQuiz.questionList[scenarioQuiz.currentIndex] + "id").hide().fadeIn('slow');
  scenarioQuiz.currentIndex += 1;
}
