import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react";

describe('Pruebas en el useCounter', () => { 
        test('Debe retornar los valores por defecto', () => { 
            const {result} = renderHook(() => useCounter());
            const {counter, action: {decrement, increment, reset}} = result.current;

            expect(counter).toBe(10);
            expect(decrement).toEqual(expect.any(Function));
            expect(increment).toEqual(expect.any(Function));
            expect(reset).toEqual(expect.any(Function));
        });

        test('Debe de generar el counter con el valor de 100 si se lo envio', () => {
            const {result} = renderHook(() => useCounter(100));
            expect(result.current.counter).toBe(100);
        });

        test('Debe incrementar 1', () => { 
            const {result} = renderHook(() => useCounter());
            const {counter, action: {increment}} = result.current;
            
            act(
                () => {
                    increment();
                }
            );

            expect(result.current.counter).toBe(11);
        });

        test('Debe restar 3', () => { 
            const {result} = renderHook(() => useCounter());
            const {counter, action: {decrement}} = result.current;
            
            act(
                () => {
                    decrement(3);
                }
            );

            expect(result.current.counter).toBe(7);
         })

        test('Debe resetear', () => { 
            const {result} = renderHook(() => useCounter());
            const {counter, action: {decrement, reset}} = result.current;
            
            act(
                () => {
                    decrement(3);
                    reset();
                }
            );

            expect(result.current.counter).toBe(10);
         })


 })