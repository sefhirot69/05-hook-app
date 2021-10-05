import React, {useEffect} from 'react';

const Message = () => {

    useEffect(() => {
        console.log('componente montado');
        return() => {
            console.log('componente desmontado');
        }
    },[]);

    return (
        <>
            <h3>Eres imbécil</h3>
        </>
    );
};

export default Message;