import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import './styles/loading.css'
import './styles/navigation.css'
import './styles/progressIndicator.css'
import './styles/visualization.css'
import './styles/sections.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)