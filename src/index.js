import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initialState from './base.json'
import { createStore } from 'redux';
console.log(initialState);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//state is an objexct with a cards property which is an array of objects
// {cards: [{}, {}, {}, ]}


//State


// ===============================================
// Actions + Action creators
const ACTION_CATCH = 'catch';

function catchCard(id) {
    return {
        type: ACTION_CATCH,
        payload: {
            id,
            //id: id,  same as above, key and value are the same so can ommit colon and value 

        }
    }
}
window.catchCard = catchCard;
// ===============================================
// Reducer
function cards(state=initialState, action={type: ''}) {
    switch(action.type){
        case ACTION_CATCH:
        // find card, and set it to caught

        break;
        default:
            return state;
        break;
    }

}
// ===============================================
// Store
const store = createStore(cards);
window.store = store;
