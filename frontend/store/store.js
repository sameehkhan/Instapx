import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    return (
        createStore(rootReducer, preloadedState, applyMiddleware(thunk)) // took out logger
    );
};

export default configureStore;