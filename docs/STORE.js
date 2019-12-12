/* 
* For the entire app we always have just one store
* Responsibilities:
    * holds app state,
    * exposes getState() which allows access to the state it stores,
    * exposes dispatch(action) to allow updates to state,
    * Exposes subscribe(listener) to register listeners, 
      --> listener is a function which is executed any time state mutates
      --> subscribe returns the unsubscribe function
*/