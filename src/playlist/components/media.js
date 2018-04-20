import React, { PureComponent } from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends PureComponent {
  state = {
    author: ''
  }

  handleClick = (event) => {
    this.props.handleOpenModal(this.props)
  }

  render() {
    return (
      <div className='media' onClick={this.handleClick}>
        <div className='media-cover'>
          <img
              src={this.props.cover}
              alt='smiling teacher'
              height={160}
              width={260}
              />
            <h3 className='media-title'>{this.props.title}</h3>
            <p className='media-description'>{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media
