var inquirer = require('inquirer');
var wordToEnter = [];
var wordType = ["verb (past tense)", "noun", "adjective", "verb", "noun (plural)", "adjective", "noun", "adjective", "noun", "noun", "verb", "adjective"];
var loop = 0;

function MadLibs(word) {
  this.word = word;
  this.story = "There once was a little girl who wanted to [word] hot [word] on her [word] grandpa. She would [word] around town finding [word] to plot revenge on her grandpa for not visiting her and not giving her [word] doughnuts. One day, she went to a [word] and bought a lot of [word] [word]. She took the [word] and was on her merry way to [word] her [word] plan."
}
//takes words from MadLibs and creates story.
function createStory(object) {
  console.log("Here's your final story! \n=================");
  
  for(var i = 0; i<wordToEnter.length; i++){
    object.story = object.story.replace("[word]", object.word[i]);
  }
  console.log(object.story);

}

function getWords(loop) {
  if(loop < wordType.length){
    inquirer.prompt([{
      name: "word",
      message: "Enter a " + wordType[loop] + ":",
      type: "input"
     }]).then(function(ans){
      wordToEnter.push(ans.word);
      loop++;
      getWords(loop);
    })
  }

  if(loop >= wordType.length){
    var madLib = new MadLibs(wordToEnter);
    createStory(madLib);
  }

}

getWords(loop);

