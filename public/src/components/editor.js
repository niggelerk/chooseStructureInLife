import React from 'react'
import ReactDOM from 'react-dom'
import { Icon, Button } from 'antd'
import { Component } from 'react';
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import superagent from 'superagent'

class Editor extends React.Component{

  constructor(){
    super()
    this.state ={
      images: []
    }
  }
  componentWillMount(){

  }

  uploadFile(files){
    console.log('uploadFile: ')
    const image = files[0]

    const cloudName ='niggelerk'
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
    const timestamp = Date.now()/1000
    const uploadPreset = 'jxfez55y'

    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'K4t5YbqayvEUomp8Th5OcC2tvNM'
    const signature = sha1(paramsStr)

    const params ={
      'api_key': '671448322652367',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }

    let uploadRequest = superagent.post(url)
    uploadRequest.attach('file', image)

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    })

    uploadRequest.end((err, resp) => {
      if (err){
        alert(err)
        return
      }
      console.log('UPLOAD COMPLETE: '+JSON.stringify(resp.body))
      const uploaded = resp.body

      let updatedImages = Object.assign([], this.state.images)
      updatedImages.push(uploaded)

      this.setState({
        images: updatedImages
      })
    })

  }

  removeImage(event){
    event.preventDefault()
    console.log('removeImage: event.target.id');

    let updatedImages = Object.assign([], this.state.images)
    updatedImages.splice(event.target.id, 1)

    this.setState({
      images: updatedImages
    })

  }


  render(){

    const list = this.state.images.map((image, i) => {
      return(<li key={i}>
          <img style={{width:18+'%'}} src={image.secure_url}/>
          <a id = {i} onClick={this.removeImage.bind(this)} href='#'>remove</a>
        </li>)
    })

    return (
      <div>
      <Dropzone onDrop={this.uploadFile.bind(this)} />
      <ul>
      {list}
      </ul>
      </div>
    )
  }

  componentDidMount(){

  }
}
export default Editor
