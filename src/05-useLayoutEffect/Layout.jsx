import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage, PokemonCard } from '../03-examples';

export const Layout = () => {

    const { counter, action } = useCounter(1);
    const { data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Informacion del Pokemon</h1>
            <hr />

            {isLoading 
            ? <LoadingMessage/>
            : <PokemonCard id={counter} name={data?.name} sprites={data?.sprites}/>
            }


            {counter > 1 && (<button className="btn btn-primary" onClick={() => action.decrement()}> Anterior </button>)}
            
            {counter < 1025 && ( <button className="btn btn-primary" onClick={() => action.increment()}> Siguiente </button>)}
        </>
    )
}
