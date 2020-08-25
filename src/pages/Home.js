import React from 'react'
import { MoviePage } from './index'
import { Container } from '../styled'

const Home = () => {
  return (
    <div>
      <MoviePage>
        <Container>
          <div className="header">
            <h1 className="heading">Home page</h1>
          </div>
        </Container>
      </MoviePage>
    </div>
  )
}

export default Home
