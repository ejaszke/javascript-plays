import { combineReducers, createStore } from 'redux';
import { todos, visibilityFilter } from './src/todos'

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
