import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({id, name, sprites = []}) => {

  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {height, width} = h2Ref.current.getBoundingClientRect();
    setBoxSize({height, width})

  }, [name])

  return (
    <section style={{height: 200, display: 'flex'}}>
        <h2 ref={h2Ref} className="text-capitalize">#{id} - {name}</h2>

        {
            Object.values(sprites)?.map((imgs, index) => (
                typeof imgs == 'string' && <img key={index} src={imgs} alt={`Sprite ${imgs}`} />
            ))
        }

        <pre>{JSON.stringify(boxSize)}</pre>

    </section>
  )
}