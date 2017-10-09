import React from 'react'
import ReactDOM from 'react-dom'
import {Icon, Button, Modal} from 'antd'
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
     {storeEditor.items.map((item, index) => {
      let style = {backgroundImage: "url(" + item.url + ")"}
      let modalstyle = {backgroundImage: 'url('+item.url+')'}
      return(
       <Col xs={24} sm={6} md={4} lg={3} key={index}>
        <div className = "block" style = {style} >
         <Button onClick={storeEditor.removeItem.bind(this,item.id)}>
          x
         </Button>
         <div className = "star"> {index+1} </div>
         <Button onClick={storeEditor.modifyImage.bind(this,item.url, item.id)}>
          turn right
         </Button>
         <Button type = "primary" onClick={storeUIEditor.showModalItem}> Original Size </Button>
         <Modal title="Original Size" visible = {storeUIEditor.isModalVisible} onCancel={storeUIEditor.closeModal} onOk= {storeUIEditor.closeModal} footer={[
            <Button key="close" size="large" onClick={storeUIEditor.closeModal}>
              Close
            </Button>,
          ]}><div className = "originalSize" style={modalstyle}></div></Modal>
        </div>
       </Col >)})
      }
      <Col xs={24} sm={6} md={4} lg={3}>
       <div className="block">
        <Dropzone onDrop = {storeEditor.uploadFile}> {storeEditor.isItemLoading && <Icon type="loading" style={{ fontSize: 60, color: '#7e7e7e' }}></Icon>}</Dropzone>

       </div>
      </Col >
    </Row>
   </div>)
  }
}

export default Editor
