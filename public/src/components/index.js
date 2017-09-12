import React from 'react'
import ReactDOM from 'react-dom'
import Editor from './editor.js'
import { BrowserRouter, Switch , Route} from 'react-router-dom'
import 'antd/dist/antd.css'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Editor}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
