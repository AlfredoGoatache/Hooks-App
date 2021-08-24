import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const MultipleCustomHooks = ()=> {

    const {counter, increment, decrement} = useCounter(1)

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const post = data && data[0] ? data[0] : {author: 'NO EXISTE', quote: 'NO EXISTE'};

    const {author, quote}: any = post;


    return(
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>    
                    )
                :
                    (
                        <blockquote className='blockquote text'>
                            <p className='mb-2'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }

            <button 
            className='btn btn-primary margin-left: 10px'
            onClick={decrement}
            >
                Atras 
            </button>

            <button 
            className='btn btn-primary margin: 10px'
            onClick={increment}
            >
                Siguiente 
            </button>

        </div>
    );
};

export{
    MultipleCustomHooks
}