import React, { Component } from 'react'

import Search from './components/Search'
import SearchResults from './components/SearchResults'

const styles = {
  app: {
    justifyItems: 'center',
    fontFamily: 'Helvetica'
  },
  wrapper: {
    width: '75%'
  }
}

class App extends Component {
  initialState = {
    loading: false,
    query: '',
    results: null,
    error: false,
    errorMessage: null
  }

  state = this.initialState

  handleChange = e => {
    this.setState({ error: false, query: e.target.value })
  }

  handleSearch = async e => {
    e.preventDefault()
    if (this.state.query && this.state.query.length > 2) {
      this.setState({ loading: true })
      const { query } = this.state
      try {
        const res = await fetch(
          `https://itunes.apple.com/search?term=${query}&entity=album`
        )
        const { results } = await res.json()
        this.setState({
          loading: false,
          query,
          results,
          error: false
        })
      } catch (err) {
        const { message, stack } = err
        this.setState({
          errorMessage: {
            message,
            stack
          }
        })
      }
    } else {
      this.setState({ error: true })
    }
  }

  handleReset = e => {
    e.preventDefault()
    this.setState(this.initialState)
  }

  render() {
    return (
      <div style={styles.app}>
        <h1>Welcome to iTunes artist search!</h1>
        <Search
          query={this.state.query}
          error={this.state.error ? this.state.error : null}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleReset={this.handleReset}
        />
        <br />
        {this.state.results == null ? null : (
          <SearchResults
            style={styles.wrapper}
            results={this.state.results}
            loading={this.state.loading}
          />
        )}
        {this.state.errorMessage ? (
          <React.Fragment>
            MESSAGE:{' '}
            <pre>{JSON.stringify(this.state.errorMessage.message)}</pre>
            STACK TRACE:{' '}
            <pre>
              {this.state.errorMessage.stack
                .split('\n')
                .map(line => <pre key={line}>{line}</pre>)}
            </pre>
          </React.Fragment>
        ) : null}
      </div>
    )
  }
}

export default App
