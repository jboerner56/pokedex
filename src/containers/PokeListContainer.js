// a "smart container has 3 jobs
// grab stuff from redux
// grab a dumb component
// smash them together
import { connect } from 'react-redux';
import PokeList from '../components/PokeList';
import { catchCard } from '../actions-reducers';
// we have 2 jobs
// tell it how to map redux state to react props
// tell it how to map redex dispatch to react props

// "translate" from redux state to react props
const mapStateToProps = (state) => {
    // return own custom props object
    return {
        // react goes on the left. redux on right
        // react: redux
        cards: state.cards
    }
};

// translate from redux dispatch to react props
const mapDispatchToProps = (dispatch) => {
    // return custom props object
    return {
        // the anonymous function is just like our this._helperFunctions
        handleClick: (id) => {
            // behind the scenes, redux is doing the same as our "setState"
            dispatch(catchCard(id));
        }
    };
};

// connect gives us a function that knows how to translate for a component
const wireUpTheComponent = connect(
    mapStateToProps, 
    mapDispatchToProps);
const smartPokeList = wireUpTheComponent(PokeList);
export default smartPokeList;