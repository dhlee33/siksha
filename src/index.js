import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux'
import reducers from "./reducers";
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import {getMenuRequest} from "./actions";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,composeWithDevTools(
  applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
