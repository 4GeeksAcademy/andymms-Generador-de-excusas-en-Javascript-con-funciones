import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["My sister", "My grandma", "My mom", "My friend"];
  let action = ["stole", "broke", "forgot"];
  let what = ["my book", "the keys", "the car", "my phone"];
  let when = ["before the class", "yesterday", "when I was sleeping", "last night"];

  function getRandomElement (array) {
    let index = Math.floor(Math.random() * array.length);

    return array[index];

  }

  function randomExcuse () {
    let selectedWho = getRandomElement(who);
    let selectedAction = getRandomElement(action);
    let selectedWhat = getRandomElement(what);
    let selectedWhen = getRandomElement(when);

    let Result = (selectedWho + " " + selectedAction + " " + 
      selectedWhat + " " + selectedWhen + ".");
    
    return Result;

  }

  document.getElementById("excuse").innerText = randomExcuse();
};
