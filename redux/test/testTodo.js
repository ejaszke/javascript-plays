import chai from 'chai';
import deepfreeze  from 'deepfreeze';
import {todos} from '../src/todos';

chai.should();

describe('todo', () => {

    it('should add new todo item', () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];

        deepfreeze(stateBefore);
        deepfreeze(action);

        todos(stateBefore, action).should.eql(stateAfter);
    });

    it('should be able toggle an item', () => {
        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Learn Redux Second Edition',
                completed: false
            }
        ];
        const action = {
            type: 'TOGGLE_TODO',
            id: 0
        };

        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: true
            },
            {
                id: 1,
                text: 'Learn Redux Second Edition',
                completed: false
            }
        ];

        deepfreeze(stateBefore);
        deepfreeze(action);

        todos(stateBefore, action).should.eql(stateAfter);
    });

});