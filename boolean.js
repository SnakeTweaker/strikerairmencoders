function returnTrue() {
  return true
}

function opposite(boolean) {
  // returns the opposite of the inputted boolean value
  return !boolean
}

function eitherAreTrue(bool_1, bool_2) {
  // create a result variable
  // assign it to bool_1 OR bool_2
  // return the result variable
  

var willAttendEvent = bool_1 || bool_2;
return willAttendEvent
}

function bothAreTrue(bool_1, bool_2) {
  // create a result variable
  // assign it to bool_1 AND bool_2
  // return the result 
  
  var weWillAttend = bool_1 && bool_2;
return weWillAttend;
  
}

function combination(bool_1, bool_2, bool_3) {
  // create a result variable
  // assign it to bool_1 AND either bool_2 OR bool_3
  // return the result variable
  
  var willGoToStore = bool_1 && (bool_2 || bool_3);
  return willGoToStore;
  
}

function areEqual(param_1, param_2) {
  // create a result variable
  // assign it to a comparison between param_1 and param_2 using "equal to" operator
  // return the result variable
  
  var stringsMatch = param_1 === param_2;
  return stringsMatch
  
}

function areNotEqual(param_1, param_2) {
  // create a result variable
  // assign it to a comparison between param_1 and param_2 using "not equal to" operator
  // return the result variable
  
  var stringsDoNotMatch = param_1 !== param_2;
  return stringsDoNotMatch
}

/*
Truthy and Falsy
You may come across the idea of values' being truthy or falsy. Essentially, a truthy value is one that is considered true when encountered in a Boolean context. All values are truthy, unless explicitly defined as falsy.

Falsy values:
false
0
""
null
undefined
NaN
*/


