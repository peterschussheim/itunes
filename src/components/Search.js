import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  normal: {
    width: '25'
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
    <form>
      <input
        type="text"
        style={styles.normal}
        placeholder="Search for an artist"
        onChange={handleChange}
        value={query}
      />{' '}
      <button onClick={handleSearch}>Search</button>{' '}
      <button type="button" onClick={handleReset}>
        Reset Query
      </button>
    </form>
  </React.Fragment>
)

Search.propTypes = {
  handleSearch: PropTypes.func,
  handleChange: PropTypes.func,
  handleReset: PropTypes.func,
  error: PropTypes.bool
}

export default Search
