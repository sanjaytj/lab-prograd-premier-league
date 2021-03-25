//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
createManager = (managerName, managerAge, currentTeam, trophieswon) => {
  const manager_details = [
    managerName,
    managerAge,
    currentTeam,
    trophieswon    
  ]
  return manager_details;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
createFormation = (formation) => {
 if(formation.length === 0){
   return null;
 }
 let obj = {
   "defender": formation[0],
   "midfield": formation[1],
   "forward": formation[2]
 };
 return obj;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
filterByDebut = (year) => {
  let arr=[];
  for( let i = 0; i<players.length; i++){
    if(players[i].debut == year){
      arr.push(players[i]);
    }
  }
  return arr;
}

//Progression 4 - Filter players that play at the position _______
filterByPosition = (position) => {
  arr2 =[];
  for( let i = 0; i < players.length; i++){
    if(players[i].position == position){
      arr2.push(players[i])
    }
  }
  return arr2;
}

//Progression 5 - Filter players that have won ______ award
filterByAward = (awardName) => {
  let arr3 = [];
  for(let i = 0; i < players.length; i++){
    for(let j = 0; j < players[i].awards.length; j++){
      if(arr3.includes(players[i])){
        arr3.push(players[i])
      }
    }
  }
  return arr3;
}

//Progression 6 - Filter players that won ______ award ____ times
filterByAwardxTimes = (awardName, noOfTimes) => {
  let arr = [];
  for(var i = 0; i < players.length; i++){
    var count = 0;
    for(var j = 0; j < players[i].awards.length; i++){
      if(players[i].award[j].name == awardName){
        count++;
      }
    }
    if(count == noOfTimes){
      arr.push(players[i])
    }
  }
  return arr;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age
sortByAge = () =>{
let arr = [];
for( var i = 0; i < players.length; i++){
  arr.push(players[i].age.reverse()) ;

}
return arr;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
