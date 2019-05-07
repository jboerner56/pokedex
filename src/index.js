import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initialCards from './base.json'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


//state is an objexct with a cards property which is an array of objects
// {cards: [{}, {}, {}, ]}


//State
const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';

const initialState = {
    ...initialCards, // this spreads the "cards: [...]" into this spot in initialState
    // cards : initialCards  this line is the equivalent if ...initialCards 
    visibilityFilter: VISIBILITY_ALL

}

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


const ACTION_VISIBILITY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;

function setVisibilityAll () {
    return {
        type: ACTION_VISIBILITY_ALL
    };
}
function setVisibilityCaught () {
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}
function setVisibilityUncaught () {
    return {
        type: ACTION_VISIBILITY_UNCAUGHT
    };
}
window.setVisibilityAll = setVisibilityAll;
window.setVisibilityCaught = setVisibilityCaught;
window.setVisibilityUncaught = setVisibilityUncaught;
// ===============================================
// Reducer
// cards reducer manages an array
// initialState.cards is an array
function cards(state=initialState.cards, action={type: ''}) {
    switch(action.type){
        case ACTION_CATCH:
        // find card, and set it to caught
            const newState = state.map(card => {
                    if( card.id === action.payload.id) {
                        return {
                            ...card,
                            isCaught: true
                        }
                    }else{
                        return card;
                    }
                })

            ;
            // whatever is returned by the reducer is automatically used by the store as the new version of state.
            return newState;
        //break;
        default:
            return state;
        //break;
    }
}
// visibility reducer manages a string

function visibility(state = initialState.visibilityFilter, action={type: ''}) {
    switch(action.type) {
        case ACTION_VISIBILITY_ALL:
        // set visibility to all 
            return VISIBILITY_ALL;
            
        //break;
        case ACTION_VISIBILITY_CAUGHT:
        // set vis to caught
            return VISIBILITY_CAUGHT;
            
        //break;
        case ACTION_VISIBILITY_UNCAUGHT:
        // set vis to uncaught
        return VISIBILITY_UNCAUGHT;
        
        //break;
        default: 
            return state;
        //break;
    }
}
const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
});
// ===============================================
// Store
const store = createStore(rootReducer);
window.store = store;



ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));

serviceWorker.unregister();