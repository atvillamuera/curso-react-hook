import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'Pepito',
        email: 'Pepito@gmail.com',
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    //Se lanza cuando se renderiza el form
    // useEffect(() => {
    //     console.log('useEffectCalled');
    // }, [])

    //Se lanza cada vez que se modifica el form
    // useEffect(() => {
    //     console.log('useEffectCalled'); 
    // }, [formState])

    //Se lanza cada vez que cambia el email
    // useEffect(() => {
    //     console.log('useEffectCalled');
    // }, [email])
    
      
    

    return (
        <> 
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text" className="form-control mb-2" placeholder="username" name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control"  placeholder="username@username.com" name="email" value={email} onChange={onInputChange}/>
        
            {
                (username == 'Pepito2') && <Message/>
            }        
        </>
    )
}
