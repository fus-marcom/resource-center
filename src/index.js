import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/Routes'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
