function createParagraph(){
    
    var wordOne = document.getElementById('Noun1').value;
    var wordTwo = document.getElementById('Adjective1').value;
    var wordThree = document.getElementById('Verb1').value;
    var wordFour = document.getElementById('Verb2').value;
    var wordFive = document.getElementById('Adjective2').value;
    var wordSix = document.getElementById('Adverb1').value;
    var wordSeven = document.getElementById('Verb3').value;
    var wordEight = document.getElementById('Noun2').value;
    var paragraph = "He sensed a " + wordOne + " drifting through the basement, Soundless and " + wordTwo + "," + " moving toward him. He turned and " + wordThree + " up the stairs, taking them two at a time, landing heavely with each step. Crash, the board cracked, and Liam " + wordFour + "," + " slamming his shin hard against the wood. He grabed the top step, catching himself before he fell. He wheezed, felt dizzy, woozy, Liam's " + wordFive + " leg dangled in the air, kicking at nothingness. He felt a thin, " + wordSix + " gipped around his ankle. Like a claw pulling, dragging him down. Liam yanked his leg free, lifting himself up, gasping for air, and " + wordSeven + " to the top of the stairs. He crawled into " + wordEight + "," + " into the light. He slammed the door shut behind him, twisted the lock, heart thundering."
    document.getElementById('answer').innerHTML = paragraph
console.log(wordOne, wordTwo, wordThree, wordFour, wordFive, wordSix, wordSeven, wordEight);
}

