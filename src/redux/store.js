import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootSaga } from './saga/root.saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './reducer/root.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'counter', 'category', 'product', 'cart', 'order']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]


export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)

export let persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

