import { useState, useEffect, useRef } from 'react';

const baseUrl = 'http://localhost:4001'
export const Get = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({ data: null, loading: true, error: null });
        if (method === 'GET') {
            return fetch(url)
                .then(resp => resp.json())
                .then(data => {

                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }

                })
                .catch(() => {
                    setState({
                        data: null,
                        loading: false,
                        error: 'No se pudo cargar la info'
                    })
                })

        }else{
            return fetch( url, {
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify( data )
            });
        }


    }, [url])

    return state;
}

export const Post = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url])

    return state;
}
