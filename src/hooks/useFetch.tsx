import { useState, useEffect, useRef } from 'react';

const useFetch = (url:string) => {

    const isMounted = useRef(true);

    const[state, setState]=useState({data: [], loading: true, error: null});

    useEffect( ()=>{

        return() =>{isMounted.current=false};

    }, [])

    useEffect(()=>{

        setState({ data: [], loading: true, error: null });

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                if(isMounted.current){
                    setState({
                        loading:false,
                        error: null,
                        data: data
                    })
                }   
            })

    },[url]);

    return state;
}
export{
    useFetch
}