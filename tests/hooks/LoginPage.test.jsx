import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/userContext";

describe('Pruebas en LoginPage', () => { 


    const user = {
        id: 1,
        nombre: 'Fer'
    }

    const setUserMock = jest.fn();


    test('debe mostrar el componente sin el usuario', () => { 
            
            render(
                <UserContext.Provider value={{user: null}}>
                    <LoginPage/>
                </UserContext.Provider>
            );

            const preTag = screen.getByLabelText('pre');
            expect(preTag.innerHTML).toBe('null');

     })

     test('debe de llamar a la funcion setUser cuando se hace click', () => { 

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );


        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'Juan', email: 'Juan@gmail.com'});

     })
 })