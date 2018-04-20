import React from 'react'
import Media from './media'
import './playlist.css'

function Playlist(props) {
    return (
      <div className='playlist'>
        {
          props.playlist.map((item) => {
            return <Media handleOpenModal={props.handleOpenModal} key={item.id} {...item} />
          })
        }
      </div>
    )
}

export default Playlist
