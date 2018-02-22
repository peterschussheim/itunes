import React, { Component } from 'react'

import Search from './components/Search'
import SearchResults from './components/SearchResults'

const styles = {
  app: {
    justifyItems: 'center',
    fontFamily: 'Helvetica'
  },
  wrapper: {
    display: 'grid',
    gridGap: '10px',
    width: '75%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridTemplateRows: 'repeat(auto-fit, minmax(200px, 1fr))'
  }
}

class App extends Component {
  initialState = {
    dataLoaded: false,
    query: '',
    data: null,
    error: false
  }

  state = this.initialState

  handleChange = e => {
    this.setState({ error: false, query: e.target.value })
  }

  handleSearch = async e => {
    e.preventDefault()
    if (this.state.query) {
      const { query } = this.state
      const res = await fetch(
        `https://itunes.apple.com/search?term=${query}&entity=album`
      )
      const data = await res.json()

      this.setState({
        dataLoaded: true,
        query: query,
        data: data.results,
        error: false
      })
    }

    this.setState({ error: true })
  }

  handleResetSearch = () => {}

  render() {
    return (
      <div style={styles.app}>
        <Search
          error={this.state.error ? this.state.error : null}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        {this.state.dataLoaded && (
          <SearchResults
            style={styles.wrapper}
            data={this.state.data}
            artistNameDisplay={this.state.query}
          />
        )}
      </div>
    )
  }
}

export default App
