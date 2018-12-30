/* eslint-disable linebreak-style */
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/bootstrap.min.css'
import '../src/styles/index.css'
import App from './App.jsx'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
