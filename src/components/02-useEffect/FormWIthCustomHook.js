import React, {useEffect} from 'react';
import './effects.css';
import useForm from "../../hooks/useForm";

const FormWithCustomHook = (initialState = null) => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambio');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className={'form-group'}>
                <label>Nombre</label>
                <input
                    className='form-control'
                    type='text'
                    name='name'
                    value={name}
                    autoComplete='off'
                    onChange={handleInputChange}
                />
                <label>Email</label>
                <input
                    className='form-control'
                    type='email'
                    name='email'
                    value={email}
                    autoComplete='off'
                    onChange={handleInputChange}
                />
                <label>Password</label>
                <input
                    className='form-control'
                    type='password'
                    name='password'
                    placeholder="*****"
                    value={password}
                    autoComplete='off'
                    onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
            </div>

        </form>
    );
};

export default FormWithCustomHook;