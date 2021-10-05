import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './effects.css';

const SimpleForm = (initialState = null) => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    useEffect(() => {
        console.log('Hey!')
    }, []);

    useEffect(() => {
        console.log('SimpleForm cambio!')
    }, [formState]);

    useEffect(() => {
        console.log('email cambio!')
    }, [email]);

    const handleInputChange = ({target}) => {

        console.log(target.name);
        setFormState({
            ...formState,
            [target.name] : target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
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
            </div>
        </>
    );
};

SimpleForm.propTypes = {};

export default SimpleForm;