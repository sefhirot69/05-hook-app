import React, {useMemo, useState} from 'react';
import useCouter from "../../hooks/useCounterr";

import '../02-useEffect/effects.css';
import processLatency from "../../helpers/proccessLatency";

const MemoHook = () => {

    const {counter, increment} = useCouter(5000);
    const [show, setShow] = useState(true);

    const memoProcessLatency = useMemo(() => processLatency(counter), [counter]);

    return <>
        <h1>MemoHook</h1>
        <h3>Counter: <small>{counter}</small></h3>
        <hr/>

        <p> {memoProcessLatency} </p>
        <button
            className={"btn btn-primary"}
            onClick={increment}>
            +1
        </button>

        <button
            className={"btn btn-outline-primary ml-3"}
            onClick={() => setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
};

export default MemoHook;