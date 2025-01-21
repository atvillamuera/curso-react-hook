import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe('Pruebas en todoReducer', () => { 

    const initialState = [
        {
            id: 1,
            description: 'Demo Todo',
            done: false
        },
        {
            id: 2,
            description: 'Demo Todo 2',
            done: false
        },
    ];


    test('Debe regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);

     });

     test('Debe agregar un todo', () => { 

        const action = {
            type: 'Add Todo',
            payload: {
                id: 3,
                description: 'Nuevo todo #3',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(3);
        expect(newState).toContain(action.payload);

     });

     test('Debe de eliminar un Todo', () => { 
        
        const action = {
            type: 'Remove Todo',
            payload: 2
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(1);

      });

      test('Debe de realizar el toggle del todo', () => { 
        const action = {
            type: 'Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBe(true);
       })


 })