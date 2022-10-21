import React from 'react'
import { AppBar, Avatar, Typography, Toolbar, Button } from '@mui/material'
import Buton from './Buton'

const Navigation = (props) => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: 'white', paddingLeft: '3%', paddingRight: '3%' }}>
        <Toolbar>
          <Avatar
            alt="avatar"
            src="https://64.media.tumblr.com/465db63d9ac03072e568d593486e5727/tumblr_otjpabiR2O1vmcepdo2_400.jpg"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography sx={{ color: 'black', flexGrow: 1 }} component="div">
            Christopher Gonzaga
          </Typography>
          <Button href={props.hrefHome} sx={{ my: 2, color: 'black', display: 'block', mr: 5 }}>
            Home
          </Button>
          <Button href={props.hrefAbout} sx={{ my: 2, color: 'black', display: 'block', mr: 5 }}>
            About
          </Button>
          <Button href={props.hrefServices} sx={{ my: 2, color: 'black', display: 'block', mr: 5 }}>
            Services
          </Button>
          <Button href={props.hrefWorks} sx={{ my: 2, color: 'black', display: 'block', mr: 5 }}>
            Works
          </Button>

          <Buton type={'primary'} text={'Get in touch'} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
