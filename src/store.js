import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'

export default function configureStore(preloadedState){
    const middlewares = [thunkMiddleware, loggerMiddleware]; // [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
  
    const enhancers = [middlewareEnhancer] //, monitorReducersEnhancer]
    const composedEnhancers = compose(...enhancers)
  
    const store = createStore(rootReducer, preloadedState, composedEnhancers)
    return store
};