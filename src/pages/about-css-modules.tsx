import React from 'react'
import Container from '../components/Container'
import User from '../components/User'

const AboutCSS: React.FC = () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Maria Randall"
      avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
      excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Daniela Dewitt"
      avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
      excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)

export default AboutCSS
