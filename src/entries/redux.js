/*This entry demostrates how to use native redux with js*/

import { createStore } from 'redux'

const $form = document.getElementById('form')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData($form)
  const title = data.get('title')
  console.log(title)
  const newSong = {
    type: 'ADD_SONG',
    payload: {
      title
    }
  }
  $form.reset()
  store.dispatch(newSong)
}

const initialState = [
  {
    'title':'Despacito'
  },
  {
    'title': 'one more thing'
  },
  {
    'title': 'Echame la culpa'
  }
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => {
  const $container = document.getElementById('playlist')
  const playlist = store.getState()
  $container.innerHTML = '';
  playlist.forEach((item) => {
    const template = document.createElement('p')
    template.textContent = item.title
    $container.appendChild(template)
  })
}

render()

const handleChange = () => {
  render()
}

store.subscribe(handleChange)
