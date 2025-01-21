import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);


    const incrementFather = useCallback(
        (plus) => {
          setCounter( (value) => value + plus);
  
        },
        [],
      )

    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }

    return (
        <>
            <h1>use CallbackHook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather}/>
        </>
    )
}
