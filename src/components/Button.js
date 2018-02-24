import React from 'react'

const styles = {
  button: {
    border: '1px solid #7f3cb3',
    borderRadius: '2px',
    paddingLeft: '18px',
    paddingRight: '18px',
    paddingTop: '5px',
    paddingBottom: '5px',
    fontSize: '13px',
    color: '#7f3cb3',
    cursor: 'pointer',
    textDecoration: 'none',
    outlineColor: 'blue',
    outlineWidth: 'thin'
  }
}

const Button = ({ buttonType = 'button', text, ...props }) => (
  <button type={buttonType} style={styles.button} {...props}>
    {text}
  </button>
)
const SearchButton = ({ handleSearch, ...props }) => (
  <Button buttonType="Submit" text="Search" onClick={handleSearch} {...props} />
)
const ResetButton = ({ handleReset, ...props }) => (
  <Button buttonType="button" text="Reset" onClick={handleReset} {...props} />
)

class ScrollButton extends React.Component {
  state = {
    intervalId: 0
  }

  handleClick = () => {
    this.scrollToTop()
  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop = () => {
    let intervalId = setInterval(() => this.scrollStep(), this.props.delay)
    this.setState({ intervalId })
  }

  render() {
    return (
      <Button
        onClick={this.handleClick}
        text={this.props.text}
        {...this.props}
      />
    )
  }
}

export { SearchButton, ResetButton, ScrollButton }
