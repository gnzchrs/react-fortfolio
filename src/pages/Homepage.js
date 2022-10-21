import React from 'react'

import { Avatar, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'

import myAvatar from '../assets/img/pp.jpg'

const Homepage = (props) => {
  const strings = ['Mobile Developer.', 'Software Engineer.', 'Programmer.']

  return (
    <>
      <div
        id={props.id}
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(238,244,240,255)'
        }}>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
          <div>
            <Typography variant="h2">Hi! I'm Gonz.</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4" sx={{ marginRight: 1 }}>
                I am a
              </Typography>
              <div style={{ fontSize: '2em' }}>
                <Typewriter
                  options={{
                    strings: strings,
                    autoStart: true,
                    delay: 40,
                    loop: true
                  }}
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration={1000}>
            <Avatar alt="myavatar" src={myAvatar} sx={{ width: '320px', height: '320px' }} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Homepage
