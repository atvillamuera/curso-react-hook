import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";


export const TodoApp = () => {

    const {todos, todosCounter, pendingTodos, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();

    return (
        <>
            <h1>TodoApp: {todosCounter}, <small>pendientes: {pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>

                </div>
                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    {/* TodoAdd onNewTodo */}
                    <TodoAdd onNewTodo={handleNewTodo}/>
                    {/* TodoAdd */}
                </div>
            </div>


        </>
    )
}
