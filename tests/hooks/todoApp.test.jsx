import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en todoApp', () => { 

    useTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true},
        ],
        todosCounter: 2,
        pendingTodos: 1, 
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    })

    test('Debe de mostrar el componente', () => { 

        render(<TodoApp/>);

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

        screen.debug();

     });


 })