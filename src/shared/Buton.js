import React from 'react'
import { Button } from '@mui/material'

const Buton = (props) => {
  return <div>{props.type === 'primary' && <Button>{props.text}</Button>}</div>
}

export default Buton
