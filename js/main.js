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

        
    //animate hangman
    
};