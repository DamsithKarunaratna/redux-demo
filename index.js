const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// define actions as string constants
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  // returns action object
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  } 
}

function buyIceCreem() {
  // returns action object
  return {
    type: BUY_ICECREAM,
    info: 'Buying ice cream action'
  } 
}

// (previousState, action) => newState
const initialCakeState = {
  numCakes: 10,
}

const initialIceCreamState = {
  numIceCream: 20
}

// analogous to the shopkeeper who mutates state
const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return {
        ...state, // make a copy of the state object using spread operator
        numCakes: state.numCakes - 1 // modify the required property
      }
    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM:
      return {
        ...state, // make a copy of the state object using spread operator
        numIceCream: state.numIceCream - 1 // modify the required property
      }
    default:
      return state
  }
}

// combine reducers into one
const rootReducer = combineReducers(
  {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  }
)

// redux store holding app state, accepts only one reducer
const store = createStore(rootReducer);

// getState() returns current state
console.log('Initial state', store.getState());
// register a subscriber
const unsubscribe = store.subscribe(() => {
  console.log('Updated state : ', store.getState());
})
// dispatch actions to store
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreem());
store.dispatch(buyIceCreem());

unsubscribe();

