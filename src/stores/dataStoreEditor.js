import {observable,action,toJS} from 'mobx'
import sha1 from 'sha1'
import superagent from 'superagent'


class DataStoreEditor {
 @observable items = [
  {url:"https://res.cloudinary.com/niggelerk/image/upload/v1507117490/olk9yz2h9zuswaum5cix.png", id: 1},
  {url:"https://res.cloudinary.com/niggelerk/image/upload/v1507117490/olk9yz2h9zuswaum5cix.png", id: 2},
  {url:"https://res.cloudinary.com/niggelerk/image/upload/v1507117490/olk9yz2h9zuswaum5cix.png", id: 3},
  {url:"https://res.cloudinary.com/niggelerk/image/upload/v1507117490/olk9yz2h9zuswaum5cix.png", id: 4}
 ]

 @observable isItemLoading = false;

 @action.bound removeItem(indexToRemove) {
  if (this.items.length !== 0) {
   let indexToDelete = 0
   for (let i = 0; i < this.items.length; i++) {
     let item = this.items[i]
     if (item.id === indexToRemove) {
       indexToDelete = i
       break
     }
   }
   this.items.splice(indexToDelete, 1)
  }
 }

 @action.bound uploadFile(files) {
  this.isItemLoading = true;
  var img = new Image();
  img.onload = function(){
    const image = files[0],
     cloudName = 'niggelerk',
     url = "https://api.cloudinary.com/v1_1/" + cloudName + '/image/upload',
     timestamp = Date.now() / 1000,
     uploadPreset = 'jxfez55y',
     paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'K4t5YbqayvEUomp8Th5OcC2tvNM',
     signature = sha1(paramsStr),
     params = {
      'api_key': '671448322652367',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
     }
     let uploadRequest = superagent.post(url)
     uploadRequest.attach('file', image)
     Object.keys(params).forEach((key) => {uploadRequest.field(key, params[key])})
     uploadRequest.end((err, resp) => {
      if (err) {
      console.log(err);
      return
     }
     console.log(resp.body.secure_url);


     this.items.push({url:resp.body.secure_url, id:5})
     })
     this.isItemLoading = false;
    }
  }


  @action.bound modifyImage(url, id){

    let urlString = url
    let urlBeginning = "https://res.cloudinary.com/niggelerk/image/upload/"
    let urlParameter = "a_90"
    let urlArray = urlString.split("/")
    let urlEnd = "/" + urlArray[6]+"/"+urlArray[7]
    let modifiedUrl = urlBeginning+urlParameter+urlEnd
    this.items[id-1] = {url: modifiedUrl, id: id}
  }

  @action.bound givingParameters(){
    let turnRightParameter=""
    let turnLeftParameter=""
    let turn180degreesParameter=""

    let allParametersString = turnRightParameter+turnLeftParameter+turn180degreesParameter
    return allParametersString
  }

  @action.bound swapItems (obj) {
   const temp = this.items[obj.newIndex]
   this.items[obj.newIndex] = this.items[obj.oldIndex]
   this.items[obj.oldIndex] = temp
  }

}

const storeEditor = new DataStoreEditor()
export default storeEditor
