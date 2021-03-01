// Code your solution here
function findMatching(array, string){
  return array.filter( possibleMatch => 
    possibleMatch.toLowerCase() === string.toLowerCase()
    )
}


function fuzzyMatch(array, string){
  return array.filter( possibleMatch => 
    possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0 
    )
}

function matchName(array, string){
  return array.filter(match => match.name === string);
}