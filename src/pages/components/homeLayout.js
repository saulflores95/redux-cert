import React from 'react'
import './homeLayout.css'
function HomeLayout(props) {
  return(
    <section className='home-layout'>
      {props.children}
    </section>
  )
}

export default HomeLayout
