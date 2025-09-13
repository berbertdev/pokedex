import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import FetchPokemon from './Components/api/FetchPokemon/FetchPokemon'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FetchPokemon/>
  </React.StrictMode>,
)
