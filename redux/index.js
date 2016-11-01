import { createStore } from 'redux';
import { todos, visibilityFilter } from './src/todos'


const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    };
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp);
console.log(store.getState());


store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log(store.getState());

store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Learn Redux Second Edition'
});

console.log(store.getState());

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 1
});

console.log(store.getState());
