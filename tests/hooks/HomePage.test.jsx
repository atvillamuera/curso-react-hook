import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/userContext"

describe('Pruebas HomePage', () => { 


    const user = {
        id: 1,
        nombre: 'Fer'
    }

    test('debe mostrar el componente SIN usuario', () => { 



        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

     });

     test('debe mostrar el componente CON usuario', () => { 

        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).not.toBe('null');

     });
 })