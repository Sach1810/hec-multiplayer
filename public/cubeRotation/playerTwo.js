var socket = io();

var phoneLinkTwo = "https://hec.herokuapp.com/rotating-cubes/player-1";

var id;
var computerId;
var phoneId;

var countInterval = 1;
var startTime = 3;
var countdownTime = startTime;

var gameDuration = 10;
var totalPlayingTime = gameDuration;

var squareChangeSpeed = 1000;
var inPlay = false;

var score = 0;
var right = 0;
var wrong = 0;


$("#webAddress").html(phoneLink);

$('#qrcode').qrcode({
  "size": 100,
  "color": "#3a3",
  "text": phoneLink});

var twoRotatingCubes = function(){

socket.on('movedTwo', function(id){
  console.log(id);
  phoneId = id;
  var maxPoints = 0;
  
  if (inPlay) {
    if (computerId === phoneId && maxPoints === 0) {
      maxPoints ++;
      score ++;
      right ++;

      $("#twoRight").html(right);
    } else {
      score -= 0.5;
      wrong ++;
      $("#twoWrong").html(wrong);
    };
    $("#twoScore").html(score);
  }

});

socket.on('phoneDataTwo', function(coordinates){

  document.getElementById('cubeOne').style.webkitTransform = 
    document.getElementById('cubeOne').style.transform =
      'rotateX(' + coordinates.az + 'deg) ' +
      'rotateY(' + coordinates.gy + 'deg) ' +
      'rotateZ(' + coordinates.bx + 'deg)';


  document.getElementById('cubeTwo').style.webkitTransform = 
    document.getElementById('cubeTwo').style.transform =
      'rotateX(' + coordinates.az + 'deg) ' +
      'rotateY(' + coordinates.gy + 'deg) ' +
      'rotateZ(' + coordinates.bx + 'deg)';

  document.getElementById('cubeThree').style.webkitTransform = 
    document.getElementById('cubeThree').style.transform =
      'rotateX(' + coordinates.az + 'deg) ' +
      'rotateY(' + coordinates.gy + 'deg) ' +
      'rotateZ(' + coordinates.bx + 'deg)';

  document.getElementById('cubeFour').style.webkitTransform = 
    document.getElementById('cubeFour').style.transform =
      'rotateX(' + coordinates.az + 'deg) ' +
      'rotateY(' + coordinates.gy + 'deg) ' +
      'rotateZ(' + coordinates.bx + 'deg)';

  document.getElementById('cubeFive').style.webkitTransform = 
    document.getElementById('cubeFive').style.transform =
      'rotateX(' + coordinates.az + 'deg) ' +
      'rotateY(' + coordinates.gy + 'deg) ' +
      'rotateZ(' + coordinates.bx + 'deg)';

  document.getElementById('cubeSix').style.webkitTransform = 
    document.getElementById('cubeSix').style.transform =
      'rotateX(' + coordinates.az + 'deg) ' +
      'rotateY(' + coordinates.gy + 'deg) ' +
      'rotateZ(' + coordinates.bx + 'deg)';
});
  $("#countdown").html(countdownTime);
  inPlay = true;
  countdown();
};

var countdown = function(){
  var timeTillStart = setInterval(function(){
    countdownTime -= countInterval;

    if (countdownTime === 0) {
      
      clearInterval(timeTillStart);
      
      startGameOne();
    };

  },1000); 
};
    
var startGameTwo = function() {
  inPlay = true;
  gameTime();

  var changeSquares = setInterval(function(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    if (randomNumber == 1) {
      id = "cubeOne";
    } else if (randomNumber == 2) {
      id = "cubeTwo";
    } else if (randomNumber == 3) {
      id = "cubeThree";
    } else if (randomNumber == 4) {
      id = "cubeFour";
    } else if (randomNumber == 5) {
      id = "cubeFive";
    } else if (randomNumber == 6) {
      id = "cubeSix";
    };

    computerId = id;



    setTimeout(function(){

    }, squareChangeSpeed -100);

  }, squareChangeSpeed);

  setTimeout(function(){
    clearInterval(changeSquares);

  var r2 = rightTwo;
  var w2 = wrongTwo;
  var s2 = scoreTwo; 
  $("#fRightTwo").html(r2);
  $("#fWrongTwo").html(w2);
  $("#fScoreTwo").html(s2);



  }, totalPlayingTime * 1000);
};
  
var gameTime = function(){
  
  var countdownGameTime = setInterval(function(){
    totalPlayingTime -= countInterval;
    
    $("#gameTime").html(totalPlayingTime);

    if (totalPlayingTime === 0) {
      clearInterval(countdownGameTime);
      inPlay = false;
    };
  }, 1000);
};




