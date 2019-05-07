// a "smart container has 3 jobs
// grab stuff from redux
// grab a dumb component
// smash them together
import { connect } from 'react-redux';
import PokeList from '../components/PokeList';

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

// connect gives us a function that knows how to translate for a component
const wireUpTheComponent = connect(mapStateToProps);
const smartPokeList = wireUpTheComponent(PokeList);
export default smartPokeList;