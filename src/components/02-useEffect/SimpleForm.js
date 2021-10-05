import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './effects.css';
import Message from "./Message";

const SimpleForm = (initialState = null) => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [formState]);

    useEffect(() => {

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

            {name && <Message/>}
        </>
    );
};

SimpleForm.propTypes = {};

export default SimpleForm;