
# Redux Certification
##  Store
### what does it do?
 -  Contains all the states of our application.
 -  Can access the statewith the function **getState()**.
 - Updates the state with the function **dispatch(action)**
 - Listens for changes using the **subscribe(listener)** method.
 - Stops listening for changes returning the function of the **subscribe(listener)**  method  
 ### how to create a store?


    import { createStore } from 'redux

It is composed by:
1. **Reducer** is a pure function that returns the next state
2. **PreloadState/InitialState** is the initial state of the application the first load call the api. It can be formed by any type of data.
3. **Enhancer** is a function that has the ability to extend redux abilitys using third party libraries. This is an optional parameter.

Usage:

    const store = createStore(
	    reducer,
	    initialState,
	    enhancer
    )

## Action
### what does it do?

 - They are sent using the method **dispatch()** from the store
 - They are the only source of information from the store.
 - They are plain javascript objects.

        const newSong = {
		    type: 'ADD_SONG',
		    payload: 'Despacito'
		}

 - Sending data to the store.

	 `  store.dispatch(newSong)`

## Reducer
### what does it do?

 - It is a pure function.
 - There can be more than one reducer in the application but only ONE store can exists.
 - Returns next state.
### Reducers should not!!!!
 - Modify its arguments/parameters.
 - Do secondary tasks like calling API's.
 - Call NOT-pure functions like Date.now() or Math.random().


        const reducer(state, action) {
	        switch(action.type) {
		        case 'ADD_SONG':
			        return[...state, { title: action.payload }]
	        }
	        default:
		        return state
        }

##Normilizr

Normilizr formats the information that is received by a data base or API.

Normilizr standardization objective is to reduce the redundancy of the information and makes data be more accessible.
