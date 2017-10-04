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
   const store = storeEditor

  return(
   <div>
    <Row >
     {storeEditor.images.map((item, index) => {
      let style = {backgroundImage: "url(" + item.url + ")"}
      return(
       <Col xs={24} sm={6} md={4} lg={3} key={index}>
        <div className = "block" style = {style} >
         <Button onClick={storeEditor.removeImage.bind(this,item.id)}>
          x
         </Button>
         <div className = "star"> {index+1} </div>
        </div>
       </Col >)})
      }
      <Col xs={24} sm={6} md={4} lg={3}>
       <div className="block">
        <Dropzone onDrop = {storeEditor.uploadFile}> </Dropzone>
       </div>
      </Col >
    </Row>
   </div>)
  }
}

export default Editor
