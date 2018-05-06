import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './store/reducers/burgerBuilder';

const middelwareLogger = (store) =>{

    return (next) => {

        return (action)=> {

            const result = next(action);

            console.log('[middelwareLogger]',store.getState());

            return result;

        }

    }

}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(middelwareLogger)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    );

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();