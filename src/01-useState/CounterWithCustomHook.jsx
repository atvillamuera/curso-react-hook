import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, action } = useCounter(20);

    const { increment, decrement, reset} = action;

    return (
        <>
        
            <h1>Counter with Hook: {counter}</h1>

            <hr />

            <button className="btn btn-primary" onClick={() => increment(5)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
        </>
    )
}
