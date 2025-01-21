import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react";

describe('Pruebas en el useForm', () => { 


    const initialForm = {
        name: 'Alex',
        email: 'Alex@gmail.com'
    }

    test('Debe de regresar la info por defecto', () => { 
        const {result} = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm:  expect.any( Function )
          })
     });

     test('Debe de cambiar el nombre del Formulario', () => { 
        const initialForm = {
            name: 'Alex',
            email: 'Alex@gmail.com'
        }
        const newValue = 'Juan'

        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });


        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue); // Confirmar el estado también se actualiza


      });

      test('Debe de cambiar el reset del Formulario', () => { 
        const initialForm = {
            name: 'Alex',
            email: 'Alex@gmail.com'
        }
        const newValue = 'Juan'

        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();

        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name); // Confirmar el estado también se actualiza


      })
 })