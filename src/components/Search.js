import React from 'react'

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

export default function Search({ handleSearch, handleChange, error }) {
  const placeholder = error ? 'Please enter an artist' : 'Search for an artist'

  return (
    <form onSubmit={handleSearch}>
      <input
        style={error ? styles.error : styles.normal}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />{' '}
      <input type="submit" />
    </form>
  )
}
