import React from 'react'
import ReactDOM from 'react-dom'
import {
 Link
} from 'react-router-dom'
import {
 Icon,
 Button
} from 'antd'

class Start extends React.Component {
 render() {
  return (
   <Link to = "/editor" >
    <Button type = "default" > Zum Editor < /Button>
   </Link>
  )
 }
}
export default Start
