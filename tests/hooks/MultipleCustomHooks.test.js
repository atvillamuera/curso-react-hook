import { screen } from "@testing-library/dom";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { render } from "@testing-library/react";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en MultipleHooks', () => { 

    test('Debe mostrar el componente por defecto', () => { 


        useFetch.mockReturnValue({
            data: null,
            hasError: null, 
            isLoading: true
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getAllByText('Informacion del Pokemon'))

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        expect(nextButton.disabled).toBeFalsy();

     });

    test("debe de mostrar el componente un pokemon", () => {
        useFetch.mockReturnValue({
        data: {
            "id": 1,
            "name": "bulbasaur",
            "sprites": {
                "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
                "back_female": null,
                "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
                "back_shiny_female": null,
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
                "front_shiny_female": null,
            },
        },
        isLoading: false,
        hasError: null,
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText(`#1 - bulbasaur`)).toBeTruthy();
    });
 })