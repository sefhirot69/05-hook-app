import React from 'react';

const Small = React.memo(({value}) => {
    console.log('Te renderizado');
    return <>
        <small>{value}</small>
    </>
});

export default Small;