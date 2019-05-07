import { combineReducers } from 'redux';
import initialCards from './base.json'

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

export function catchCard(id) {
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

export function setVisibilityAll () {
    return {
        type: ACTION_VISIBILITY_ALL
    };
}
export function setVisibilityCaught () {
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}
export function setVisibilityUncaught () {
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
export const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
});