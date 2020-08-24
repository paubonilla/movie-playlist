import React from 'react'
// import ResultCard from '../../components/cards/ResultCard/ResultCard'
import { AddContent } from '../Add/index'
import { AddContainer } from '../../styled'

const Add = () => {
  // const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);

  // const onChange = (e) => {
  //   e.preventDefault();
  //   setQuery(e.target.value);

  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)

  //     .then(res => res.json())
  //     .then((data) => {
  //       if (!data.errors) {
  //         setResults(data.results);
  //       } else {
  //         setResults([]);
  //       }
  //     })
  // }

  return (
    <AddContainer>
      <AddContent>
        {/* <InputWrapper>
          <input
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}
          />
        </InputWrapper>
        {results.length > 0 && (
          <InputResults>
            {results.map(movie => (
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            ))}
          </InputResults>
        )} */}
      </AddContent>
    </AddContainer>
  )
}

export default Add