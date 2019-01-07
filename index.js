function dwarfRollCall(dwarves) {
}

function summonCaptainPlanet(planeteerCalls){
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
  cheeses =[ "gouda", "cheddar", "brie"]
  
  
  
  var found = foods.find(function(food){
  return food == "cheddar" || food =="brie" || food =="gouda"
  
  }  )
 return found
}
foods = ["apple", "banana", "brie","gouda"]
findTheCheese(foods)
function wordsWithB(words){
words.filter(function(word){
  return word[0] == "b"
  
} )
return wordsWithB
 
}

words = ["james","sally","bob","bicyle"]
wordsWithB(words)