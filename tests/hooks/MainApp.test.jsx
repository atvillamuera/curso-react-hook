import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { UserContext } from "../../src/09-useContext/context/userContext";
import { MemoryRouter, Routes } from "react-router-dom";

describe('Pruebas en MainApp', () => { 
    test('Debe mostrar el HomePage', () => { 
            render(
                <MemoryRouter>
                    <MainApp/>
                </MemoryRouter>
            );

            expect(screen.getByText('HomePage:')).toBeTruthy();
     });

     test('Debe mostrar el LoginPage', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
     });

     test('Debe mostrar el AboutPage', () => { 
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('AboutPage')).toBeTruthy();

        screen.debug();
     });


 })