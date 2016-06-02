var socket = io();

var phoneLinkOne = "https://hec.herokuapp.com/rotating-cubes/single/phone/player-1";
var phoneLinkTwo = "https://hec.herokuapp.com/rotating-cubes/single/phone/player-2";

var id;
var computerId1;
var phoneId1;

var computerId2;
var phoneId2;


var countInterval = 1;
var startTime = 3;
var countdownTime = startTime;

var gameDuration = 30;
var totalPlayingTime = gameDuration;

var squareChangeSpeed = 1000;
var inPlay = false;

var scoreOne = 0;
var rightOne = 0;
var wrongOne = 0;

var scoreTwo = 0;
var rightTwo = 0;
var wrongTwo = 0;


$("#webAddressOne").html(phoneLinkOne);


$('#qrcodeOne').qrcode({
  "size": 100,
  "color": "#3a3",
  "text": phoneLinkOne});

$("#webAddressTwo").html(phoneLinkTwo);
  
$('#qrcodeTwo').qrcode({
  "size": 100,
  "color": "#3a3",
  "text": phoneLinkTwo});


var rotatingCubes = function(){
  $(".gameIntro").addClass("hide");
  $(".countdown").removeClass("hide");
  $("#endGame").addClass('hide');

socket.on('movedOne', function(id){
  console.log(id);
  phoneId = id;
  var maxPoints = 0;
  
  if (inPlay) {
    if (computerId === phoneId && maxPoints === 0) {
      maxPoints ++;
      scoreOne ++;
      rightOne ++;

      $("#oneRight").html(rightOne);
    } else {
      scoreOne -= 0.5;
      wrongOne ++;
      $("#oneWrong").html(wrongOne);
    };
    $("#oneScore").html(scoreOne);
  }

});

socket.on('movedTwo', function(id){
  console.log(id);
  phoneId = id;
  var maxPoints = 0;
  
  if (inPlay) {
    if (computerId === phoneId && maxPoints === 0) {
      maxPoints ++;
      scoreTwo ++;
      rightTwo ++;

      $("#twoRight").html(rightTwo);
    } else {
      scoreTwo -= 0.5;
      wrongTwo ++;
      $("#twoWrong").html(wrongTwo);
    };
    $("#twoScore").html(scoreTwo);
  }

});

socket.on('phoneDataOne', function(coordinates){

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
    $("#countdown").html(countdownTime);

    if (countdownTime === 0) {
      $(".countdown").addClass('hide');
      $("#allCubes").removeClass('hide');
      
      clearInterval(timeTillStart);
      
      startGameOne();
    };

  },1000); 
};
    
var startGameOne = function() {
  inPlay = true;
  $('.liveScore').removeClass('hide');
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

    $("#" + id).css('background-color', 'green');

    setTimeout(function(){
      $("#" + id).css('background-color', 'black');
    }, squareChangeSpeed -100);

  }, squareChangeSpeed);

  setTimeout(function(){
    clearInterval(changeSquares);
    $("#allCubes").addClass('hide');
    $('.liveScore').addClass('hide');
  var r1 = rightOne;
  var w1 = wrongOne;
  var s1 = scoreOne; 
  $("#fRightOne").html(r1);
  $("#fWrongOne").html(w1);
  $("#fScoreOne").html(s1);

  var r2 = rightTwo;
  var w2 = wrongTwo;
  var s2 = scoreTwo; 
  $("#fRightTwo").html(r2);
  $("#fWrongTwo").html(w2);
  $("#fScoreTwo").html(s2);

    reset();

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

var reset = function(){
  socket.disconnect();
  inPlay = false;
  countdownTime = startTime;
  totalPlayingTime = gameDuration;
  $("#endGame").removeClass('hide');
  $("#gameTime").html(" ");
  $("#countdown").html(" ");

};



