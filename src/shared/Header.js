import React from 'react'
import { Typography } from '@mui/material'

const Header = (props) => {
  return (
    <div>
      <Typography variant="h2">{props.text}</Typography>
    </div>
  )
}

export default Header
