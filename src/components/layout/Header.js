import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, InnerContent, InputWrapper, InputResults } from '../layout/index'
import { Container } from '../../styled'
import ResultCard from '../../components/cards/ResultCard/ResultCard'

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)

      .then(res => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
  }
  return (
    <>
      <HeaderContainer>
        <Container>
          <InnerContent>
            <InputWrapper>
              <input
                type="text"
                placeholder="Search for a movie"
                value={query}
                onChange={onChange}
              />
            </InputWrapper>
            <Link to="/" >
              Name
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              {/* <li>
                <Link to="/add"><ADD_BTN>add</ADD_BTN></Link>
              </li> */}
            </ul>
          </InnerContent>
        </Container>
      </HeaderContainer>
      {results.length > 0 && (
        <InputResults>
          {results.map(movie => (
            <li key={movie.id}>
              <ResultCard movie={movie} />
            </li>
          ))}
        </InputResults>
      )}
    </>
  )
}

export default Header