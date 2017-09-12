import { observable,action } from 'mobx'


class StoreEditor {
 @observable images = [1,2,3,4,5,6]

 @action.bound addNumber () {
   this.images.push(7)
 }

 @action.bound removeNumber () {
   if (this.images.length !== 0) {
    this.images.splice(-1,1)
   }
 }

 @action.bound togglePlaying () {
   this.isMusicPlaying = !this.isMusicPlaying
 }

}


const MyStore = new StoreEditor()
export default MyStore
