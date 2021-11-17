import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import userReducer from '../reducer/user'
import albumReducer from '../reducer/album'
import trackReducer from '../reducer/track'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  album: albumReducer,
  track: trackReducer,
})
type RootReducer = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))

export default store
export type { RootReducer }
