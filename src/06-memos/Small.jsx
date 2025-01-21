import { memo } from "react"

export const Small = memo(({value}) => {

    console.log('Small Generado :(')

  return (
    <small>{value}</small>
  )
})
