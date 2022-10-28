import React from 'react'
import { AppBar, Avatar, Typography, Toolbar, Button, Switch } from '@mui/material'
import Buton from './Buton'

const Navigation = (props) => {
  return (
    <div>
      <AppBar position="fixed" sx={{ paddingLeft: '3%', paddingRight: '3%' }}>
        <Toolbar>
          <Avatar
            alt="avatar"
            src="https://64.media.tumblr.com/465db63d9ac03072e568d593486e5727/tumblr_otjpabiR2O1vmcepdo2_400.jpg"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography sx={{ flexGrow: 1 }} component="div">
            Christopher Gonzaga
          </Typography>
          <Button href={props.hrefHome} sx={{ my: 2, display: 'block', mr: 5 }}>
            Home
          </Button>
          <Button href={props.hrefAbout} sx={{ my: 2, display: 'block', mr: 5 }}>
            About
          </Button>
          <Button href={props.hrefServices} sx={{ my: 2, display: 'block', mr: 5 }}>
            Services
          </Button>
          <Button href={props.hrefWorks} sx={{ my: 2, display: 'block', mr: 5 }}>
            Works
          </Button>

          <Buton type={'primary'} text={'Get in touch'} />
          <Switch
            checked={props.checked}
            onChange={props.onChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
