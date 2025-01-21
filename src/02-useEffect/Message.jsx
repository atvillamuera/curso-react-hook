import { useState, useEffect } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {

        //Aqui se monta
        // console.log('Message Mounted');


        const onMouseMove = ({x, y}) => {
            setCoords({x, y}); 
        }

        //Al montar escuchamos esto, por ejemplo.
        window.addEventListener('mousemove', onMouseMove);
    
      return () => {
        //Aqui se desmonta
        // console.log('Message Unmounted')

        //Al desmontarlo, dejamos de escuchar esto, para que no se acumulen cada vez que se crea la anterior escucha
        window.removeEventListener('mousemove', onMouseMove);

      }
    }, [])
    


    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
