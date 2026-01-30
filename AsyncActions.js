const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const { thunk: thunkMiddleware } = require('redux-thunk')
const axios = require("axios")

const initialStates = {
  loading: false,
  users: [],
  error: ""
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED"
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

const fetch_user_requested = () => ({ type: FETCH_USERS_REQUESTED })

const fetch_user_succeeded = users => ({
  type: FETCH_USERS_SUCCEEDED,
  payload: users
})

const fetch_user_failed = error => ({
  type: FETCH_USERS_FAILED,
  payload: error
})

function reducer(state = initialStates, action) {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true }

    case FETCH_USERS_SUCCEEDED:
      return { loading: false, user: action.payload, error: "" }

    case FETCH_USERS_FAILED:
      return { loading: false, user: [], error: action.payload }

    default:
      return state  
  }
}

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetch_user_requested())

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name)
        dispatch(fetch_user_succeeded(users))
      })
      .catch(error => {
        dispatch(fetch_user_failed(error.message))
      })
  }
}

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(fetchUser())
