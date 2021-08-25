import { useState, useEffect, useRef } from 'react';
import { useCounter } from './useCounter';

const useFetch = (url:string, counter: number = 0) => {

    const isMounted = useRef(true);

    const[state, setState]=useState({data: [], loading: true, error: null});

    useEffect( ()=>{

        return() =>{isMounted.current=true};

    }, [])

    useEffect(()=>{

        setState({ data: [], loading: true, error: null });

        fetch(url, {referrer: "randomnumberapi.com"})
            .then( resp => resp.json() )
            .then( data => {
                console.log("fetch data", data);

                setState({
                    loading:false,
                    error: null,
                    data: data
                })

                // if(isMounted.current){
                //     setState({
                //         loading:false,
                //         error: null,
                //         data: data
                //     })
                // }   
            })

    },[url, counter]);

    return state;
}
export{
    useFetch
}