import React from 'react'
import PropTypes from 'prop-types'

import { SearchButton, ResetButton } from './Button'

const styles = {
  normal: {
    maxWidth: '75%'
  },
  input: {
    border: '1px solid #7f3cb3',
    marginBottom: 5,
    outlineColor: 'blue',
    outlineWidth: 'thin',
    width: '50%',
    height: 18
  },
  error: {
    color: 'red',
    width: '25',
    fontWeight: 800
  }
}

const Search = ({ handleSearch, handleChange, handleReset, error, query }) => (
  <React.Fragment>
    <div>
      {error ? (
        <p style={styles.error}>Please enter an artist</p>
      ) : (
        <p style={styles.normal}>{''}</p>
      )}
    </div>
    <form style={styles.normal}>
      <input
        style={styles.input}
        type="text"
        placeholder="Search for an artist"
        onChange={handleChange}
        value={query}
      />{' '}
      <br />
      <SearchButton handleSearch={handleSearch} />{' '}
      <ResetButton handleReset={handleReset} />
    </form>
  </React.Fragment>
)

Search.propTypes = {
  handleSearch: PropTypes.func,
  handleChange: PropTypes.func,
  handleReset: PropTypes.func,
  error: PropTypes.bool,
  query: PropTypes.string
}

export default Search
