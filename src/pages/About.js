import React from 'react'
import { Typography } from '@mui/material'
import Header from '../shared/Header'
const About = (props) => {
  return (
    <div
      id={props.id}
      style={{
        height: '100vh',
        paddingTop: '5em',
        paddingLeft: '10em',
        paddingBottom: '10em',
        backgroundColor: 'white'
      }}>
      <Header text={'About'} />
      <div style={{ alignItems: 'center', width: '90%' }}>
        <div data-aos="fade-right" data-aos-duration={500} data-aos-delay={100}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'justify',
              paddingTop: '5em'
            }}>
            My name is Christopher Gonzaga, a Filipino from City of Naga, Cebu. And I am a front-end
            mobile programmer .
          </Typography>
        </div>
        <div data-aos="fade-right" data-aos-duration={500} data-aos-delay={200}>
          <Typography variant="h4" sx={{ textAlign: 'justify', paddingTop: '2em' }}>
            I graduated with a degree in Bachelor of Science in Information Technology at University
            of Cebu Main Campus. I am a flexible, reliable and result-driven programmer.
          </Typography>
        </div>
        <div data-aos="fade-right" data-aos-duration={500} data-aos-delay={300}>
          <Typography variant="h4" sx={{ textAlign: 'justify', paddingTop: '2em' }}>
            I experienced working as an office admin part-time when I was in my earlier years in
            college. I have also worked as a Software Engineer Intern in my Practicum and assigned
            in the Front-End Mobile Team. In my Capstone Project, I was tasked to lead and maintain
            the front-end mobile application.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About
