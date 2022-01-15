import processLatency from "../../helpers/proccessLatency";

describe('Prueba sobre el helper processLatency',() => {

    test('vamos a probar que hace las iteraciones que le pedimos', () => {

        expect(processLatency(10)).toBe('10 iteraciones realizadas')

    });

});