import React, { Component } from 'react'

import Search from './components/Search'
import SearchResults from './components/SearchResults'

const styles = {
  app: {
    justifyItems: 'center',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    width: '85%',
    color: 'rgb(71, 71, 71)',
    border: '1px solid #7f3cb3',
    borderRadius: '2px',
    paddingLeft: '18px',
    paddingRight: '18px',
    paddingTop: '5px',
    paddingBottom: '15px'
  }
}

class App extends Component {
  initialState = {
    loading: false,
    query: '',
    results: null,
    inputError: false,
    errorMessage: null
  }

  state = this.initialState

  handleChange = e => {
    this.setState({ inputError: false, query: e.target.value })
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

        if (results.length === 0) {
          throw new Error('Query returned zero results')
        }

        this.setState({
          loading: false,
          query,
          results,
          inputError: false
        })
      } catch (err) {
        const { message, stack } = err
        this.setState({
          loading: false,
          errorMessage: {
            message,
            stack
          }
        })
      }
    } else {
      this.setState({ inputError: true })
    }
  }

  handleReset = e => {
    e.preventDefault()
    this.setState(this.initialState)
  }

  render() {
    return (
      <div style={styles.app}>
        <h1>iTunes artist search</h1>
        <Search
          query={this.state.query}
          error={this.state.inputError ? this.state.inputError : null}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleReset={this.handleReset}
        />
        <br />
        {!this.state.results && this.state.errorMessage ? (
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
        ) : (
          <SearchResults
            results={this.state.results}
            loading={this.state.loading}
          />
        )}
      </div>
    )
  }
}

export default App
