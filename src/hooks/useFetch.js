import {useEffect, useRef, useState} from "react";


const useFetch = (url) => {

    const isMounted = useRef(false);

    const [state, setState] = useState({ data: null, loading: true, error: null});

    useEffect(() => {

        return () => {
            isMounted.current = true;
        }
    });

    useEffect(() => {

        setState({data: null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                });
            });
    }, [url]);

    return state;
}

export default useFetch;