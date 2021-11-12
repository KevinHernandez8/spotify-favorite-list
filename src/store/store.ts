import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducer/user'

const rootReducer = combineReducers({
  user: userReducer,
})
type RootReducer = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store
export type { RootReducer }
