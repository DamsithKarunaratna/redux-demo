// Prinicple one ##################################
/*
  State of the whole application is stored in an object tree within a single store

  {
    numCakes: 10
  } // store

*/

// Principle Two ##################################

/*
 * Only way to change the state is to dispatch an action (an object describing what happened)
  
 {
    type: BUY_CAKE
  } // action

 */

// Principle Three ##################################

/*
* Write pure reducers to specify how an action should transform the state
(previousState, action) => newState

newState should be a newObject
*/

 