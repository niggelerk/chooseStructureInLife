import { observable,action } from 'mobx'

class UIStoreEditor {
 @action.bound togglePlaying () {
  this.isMusicPlaying = !this.isMusicPlaying
 }
}

const storeUIEditor = new UIStoreEditor()
export default storeUIEditor
