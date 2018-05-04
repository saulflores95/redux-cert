import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'
class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value, 'submit');
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value
      }
    })
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

export default connect()(SearchContainer) //connect para tener la funcion dispatch
