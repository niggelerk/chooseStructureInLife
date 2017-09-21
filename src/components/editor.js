import React from 'react'
import ReactDOM from 'react-dom'
import {Icon, Button} from 'antd'
import {Component} from 'react'
import Dropzone from 'react-dropzone'
import storeEditor from '../stores/dataStoreEditor'
import storeUIEditor from '../stores/uiStoreEditor'
import {observer} from 'mobx-react'
import {Row,Col} from 'antd'

@observer
class Editor extends React.Component {
 render() {
  return(
   <div>
    <Row >
     {storeEditor.images.map((url, index) => {
      let style = {backgroundImage: "url(" + url + ")"}
      return(
       <Col xs={24} sm={4} md={6} lg={2} key={index}>
        <div className = "block" style = {style} > </div>
       </Col >)})
      }
      <Col xs={24} sm={4} lg={2}>
       <Dropzone onDrop = {storeEditor.uploadFile}>
       </Dropzone>
      </Col >
    </Row>
   </div>)
  }
}

export default Editor
