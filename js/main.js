window.onload = function (){

    let alphabet = [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'
    ];

    let word ;          //selected word
    let guess ;         //Guess
    let word ;          //selected word
    let guesses = [ ];  //Stored guesses
    let lives ;         //lives counter
    let counter ;       //Count correct guesses
    let space;          //number of letter displayed in word

    // get elements
    const showLives = document.getElementById("lives");
    
    
    // creates alphabet array into ul element
    let buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');
    
        for (let i = 0; i < alphabet.length; i++) {
          letters.id = 'alphabet';
          list = document.createElement('li');
          list.id = 'letter';
          list.innerHTML = alphabet[i];
          check();
          myButtons.appendChild(letters);
          letters.appendChild(list);
        }
      }

    // Creates ul for Guesses
    result = function () {
        wordHolder = document.getElementById("btns");
        correct = document.createElement("li");

        for (let i = 0; i < word.length; i++) {
            correct.setAttribute("class", "guess");
            if (word[i] === "-"){
                guess.innerHTML = "-";
                space = 1;
            }
            else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    //display lives
    comments = function() {
        showLives.innerHTML = "Your lives left: " + lives;
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (let i = 0; I < guesses.length; i++) {
            if (counter+ space === GamepadPose.length) {
                showLives.innerHTML = "We Have a Winner!";
            }
        }
    }

        
    //array to make Hangman
    let hangman = function() {
        let drawMe = lives;
        drawArray[drawMe]();
    }

    //Draw Hangman
    canvas = function() {
        myHangman = document.getElementById("hangman");
        context = myHangman.getContext("2d");
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

    head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
     


};