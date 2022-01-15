import {shallow} from "enzyme";
import HookApp from "../HookApp";

describe('Pruebas sobre HookApp', () => {
    let wrapper = shallow(<HookApp/>);

    test('Debe mostrar el componente HookApp', () => {
        expect(wrapper).toMatchSnapshot();
    });
});