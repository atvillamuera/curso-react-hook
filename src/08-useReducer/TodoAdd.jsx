import { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const inputRef = useRef();

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {

        event.preventDefault();

        if(!description){
            inputRef.current.classList.add('is-invalid');
            return;
        } 

        onNewTodo({ 
            id: new Date().getTime() * 5,
            description:description,
            done: false
        });
        inputRef.current.classList.remove('is-invalid');
        onResetForm();
          


    }


    return (
        <form onSubmit={onFormSubmit}>
            <input ref={inputRef} type="text" placeholder="¿Que hay que hacer?" className="form-control mb-2" name="description" value={description} onChange={onInputChange}/>
            <button type="submit" className="btn btn-primary">Agregar todo</button>
        </form>
    )
}
