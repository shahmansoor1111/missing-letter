 const words = ["faraz", "mansoor", "wahab", "waqas", "ali", "tatheer"];
    let currentWord = "";
    let missingIndex = 0;

    function newWord() {
      document.getElementById("result").textContent = "";
      currentWord = words[Math.floor(Math.random() * words.length)];
      missingIndex = Math.floor(Math.random() * currentWord.length);

      
      let display = currentWord.split("");
      display[missingIndex] = "_";
      document.getElementById("word").textContent = display.join("");
    }

    function checkAnswer() {
      let guess = document.getElementById("guess").value.toLowerCase();
      if (guess === currentWord[missingIndex]) {
        document.getElementById("result").textContent = "✅ Correct! Moving to next...";
        setTimeout(newWord, 2000);
      } else {
        document.getElementById("result").textContent = "❌ Wrong! Try again.";
      }
      document.getElementById("guess").value = "";
    }

    
    newWord();