import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import Nasa from './Nasa'

ReactDOM.render(
    <div>
        <App />
        <Nasa />
    </div>, document.getElementById('root'));

registerServiceWorker()