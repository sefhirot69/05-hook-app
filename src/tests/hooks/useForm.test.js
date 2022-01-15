import {act, renderHook} from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'fernando',
        email: 'fernando@gmail.com'
    };

    test('debe de regreasar un formulario por defecto', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        const target = {
            name: 'name',
            value: 'pepe'
        }

        act(() => {
            handleInputChange({target})
        });

        const [values] = result.current;

        expect(values.name).toEqual(target.value);
        expect(values).toEqual({...initialForm, name: 'pepe'});

    });

    test('debe de re-establecer el formulario con RESET', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        const target = {
            name: 'name',
            value: 'pepe'
        }

        act(() => {
            handleInputChange({target})
            reset()
        });

        const [values] = result.current;

        expect(values).toEqual(initialForm);

    });
});