import {observable,action} from 'mobx'
import sha1 from 'sha1'
import superagent from 'superagent'

class DataStoreEditor {
 @observable images = [
  {url:"https://www.lonelyplanet.com/maps/pacific/australia/map_of_australia.jpg", id: 1},
  {url:"https://www.lonelyplanet.com/maps/pacific/australia/map_of_australia.jpg", id: 2},
  {url:"https://www.lonelyplanet.com/maps/pacific/australia/map_of_australia.jpg", id: 3},
  {url:"https://www.lonelyplanet.com/maps/pacific/australia/map_of_australia.jpg", id: 4}
 ]

 @action.bound removeImage(indexToRemove) {
  if (this.images.length !== 0) {
   let indexToDelete = 0
   for (let i = 0; i < this.images.length; i++) {
     let item = this.images[i]
     if (item.id === indexToRemove) {
       indexToDelete = i
       break
     }
   }
   this.images.splice(indexToDelete, 1)
  }
 }

 @action.bound uploadFile(files) {
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
    alert(err);
    return
   }
    this.images.push({url:resp.body.secure_url, id:45})
   })
  }
}

const storeEditor = new DataStoreEditor()
export default storeEditor
