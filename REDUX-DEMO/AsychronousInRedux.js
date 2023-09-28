/*
The structure of state when fetching data from an endpoint (API)
state = {
    loading: true,
    data: [],
    error: ''
}
*/
 /* 
 While calling API in redux we shall be having three ACTIONS 
 1. FETCH_USERS_REQUESTED - Fetch list of users
 2. FETCH_USERS_SUCCEEDED - Fetched successfully
 3. FETCH_USERS_FAILED - Error when fetching the data
 */
/*
The structure of the reducer looks as follows:
case: FETCH_USERS_REQUESTED
    loading: true;
case: FETCH_USERS_SUCCEEDED
    loading: false
    users: data (from API)
case: FETCH_USERS_FAILED
    loading: false
    error: error (from API)
*/

// npm i axios redux-thunk

/*
Calling of API in redux requires you to use REDUX-THUNK and AXIOS.
REDUX_THUNK provides the structure of how the API should look while using it in redux
*/


// Let get started already!!!

const redux = require('redux')
const createStore = redux.createStore 
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const initialState = {
    loading: false,
    data: [],
    error: '',
}

// const actions 

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';


const FetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  }
}

const fetchUserSucceeded = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

const reducer = (state = initialState, action) => {
switch(action.type){
    case FETCH_USERS_REQUESTED:
        return{
            ...state,
            loading: true,
        }
    case FETCH_USERS_SUCCEEDED:
        return{
            // ...state,
            loading: false,
            users: action.payload,
            error: '',
        }
    case FETCH_USERS_FAILED:
        return{
            // ...state,
            loading: false,
            users: [],
            error: action.payload,
        }
}
}
const url = 'https://jsonplaceholder.typicode.com/users'
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(FetchUsersRequest("Still processing"))
        axios
        .get('https://jsonplaceholder.typicode.com/users').then(response => {
            // const users = response.data.map((user) => user.id)
            const users = response.data
            dispatch(fetchUserSucceeded(users))
        }).catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
} 

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers())
