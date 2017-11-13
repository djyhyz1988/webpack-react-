/**
 * storeConfig
 */
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';                    //允许我们 dispatch() 函数
import createLogger from 'redux-logger';            //打印action日志
import rootReducer from '../reducers/index';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk,createLogger)
)

export default store