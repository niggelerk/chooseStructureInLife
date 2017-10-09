import { observable,action } from 'mobx'

class UIStoreEditor {
 @observable isModalVisible = false
 @action.bound togglePlaying () {
  this.isMusicPlaying = !this.isMusicPlaying
 }

 @action.bound showModalItem (){
   this.isModalVisible = true;
 }
 @action.bound closeModal (){
   this.isModalVisible = false;
 }

}

const storeUIEditor = new UIStoreEditor()
export default storeUIEditor
