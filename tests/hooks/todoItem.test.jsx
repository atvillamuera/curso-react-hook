import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en todoItem', () => { 

    const todo = {
        id: 1,
        description: 'Comprar queso',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el Todo Pendiente de completar', () => { 
        
            render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);

            const liElement = screen.getByRole('listitem');

            expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

            const spanElement = screen.getByLabelText('span');

            expect (spanElement.className).toContain('align-self-center');
     });

     test('Debe mostrar el todo completado', () => { 

        todo.done = true;

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);

        const spanElement = screen.getByLabelText('span');

        expect (spanElement.className).toContain('text-decoration-line-through');

       
      });

      test('Debe llamar al ToggleTodo cuando se hace click', () => { 


        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

       
      });

      test('Debe llamar al DeleteTodo cuando se hace click en el boton', () => { 


        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

       
      })


 })