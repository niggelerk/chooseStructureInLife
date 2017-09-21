import {observable,action} from 'mobx'
import sha1 from 'sha1'
import superagent from 'superagent'

class DataStoreEditor {
 @observable images = [
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Map_of_Australia.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Map_of_Australia.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Map_of_Australia.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Map_of_Australia.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Map_of_Australia.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Map_of_Australia.png"
 ]

 @action.bound removeImage() {
  if (this.images.length !== 0) {
   this.images.splice(-1, 1)
  }
 }

 @action.bound uploadFile(files) {
  const image = files[0],
   cloudName = 'niggelerk',
   url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload',
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
    alert(err);
    return
   }
    this.images.push(resp.body.secure_url)
   })
  }
}

const storeEditor = new DataStoreEditor()
export default storeEditor
