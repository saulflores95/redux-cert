import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../static-api.json'

const homeContainer = document.getElementById('home-container')

render(<Home data={data} />, homeContainer) //  Que voy a renderizar, donde voy a renderizar
