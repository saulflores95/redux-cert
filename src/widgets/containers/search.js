import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component {
  state = {
    value: 'luis fonsi'
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value, 'submit');
  }
  setInputRef = (element) => {
    this.input = element
  }
  hanldeInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  render() {
    return <Search
      setRef={this.setInputRef}
      handleSubmit={this.handleSubmit}
      handleChange={this.hanldeInputChange}
      value={this.state.value}
      />
  }
}

export default SearchContainer
