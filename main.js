const todos = [
  {
  text: 'Christmas shopping',
  id: 0,
  complete: false,
  priority: 1,
},
{
  text: `make doctor's appointment`,
  id: 1,
  complete: true,
  priority: 2,
},
{
  text: 'binge watch The Office',
  id: 2,
  complete: false,
  priority: 2,
},
{
  text: 'research dinosaurs',
  id: 3,
  complete: false,
  priority: 1,
},
{
  text: 'fire Colin',
  id: 4,
  complete: true,
  priority: 2,
},
{
  text: 'start novel',
  id: 5,
  complete: true,
  priority: 1,
},
]
/********************
 * HELPER FUNCTIONS *
 ********************/
// const todos = require('./main.test.js')

const getTodoName = function(todos) {
  return todos.text;
}

const getPriority = function(todos) {
  return todos.priority;
}

const isComplete = function(todos) {
  return todos.complete;
}

const isHighPriority = function(todos) {
  if (getPriority(todos) === 2) {
    return true;
  } else {
    return false;
  }
}

const names = function(todos) {
  return todos.map(getTodoName);
}

const priorities = function(todos) {
  return todos.map(getPriority);
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const namesAndPriorities = function(todos) {
  let result = []
  
  for (let i = 0; i < todos.length; i++) {

    let names = getTodoName(todos[i]);
    
    let priority = ''

    if (getPriority(todos[i]) === 1) {
      priority = "Low";
    } else if (getPriority(todos[i]) === 2) {
      priority = "High";
    }
    result.push(names + ' - ' + priority);
  }
  
  return result;
  }


const justNotComplete = function(todos) {
  let result = [];

  for (let i = 0; i < todos.length; i++) {
    if (isComplete(todos[i]) === false) {
      result.push(todos[i])
    }
  }
  return result;
}


const justComplete = function(todos) {
  let result = [];

  for (let i = 0; i < todos.length; i++) {
    if (isComplete(todos[i]) === true) {
      result.push(todos[i])
    }
  }
  return result;
}


const priority2Only = function(todos) {
  results = [];

  for (let i = 0; i < todos.length; i++) {
    if (getPriority(todos[i]) === 2) {
      results.push(todos[i])
    }
  }
  return results;
}


const priority1Only = function(todos) {
  results = [];

  for (let i = 0; i < todos.length; i++) {
    if (getPriority(todos[i]) === 1) {
      results.push(todos[i])
    }
  }
  return results;
}


















// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
