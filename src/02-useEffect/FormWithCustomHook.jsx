import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {


    const {formState, onInputChange, username, email, password, onResetForm} = useForm(
        {
            username: 'Pepito',
            email: 'Pepito@gmail.com',
            password: 1234
        }
    );

    // const {username, email, password} = formState;
          

    return (
        <> 
            <h1>Formulario con Custom Hook</h1>
            <hr />
            <input type="text" className="form-control mb-2" placeholder="username" name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control mb-2"  placeholder="username@username.com" name="email" value={email} onChange={onInputChange}/>
            <input type="password" className="form-control mb-2"  placeholder="password" name="password" value={password} onChange={onInputChange}/>

            <button className="btn btn-primary" onClick={onResetForm}>Borrar</button>
            {
                (username == 'Pepito2') && <Message/>
            }        
        </>
    )
}
