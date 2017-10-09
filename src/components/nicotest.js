import React from 'react'
import ReactDOM from 'react-dom'
import {Icon, Button} from 'antd'
import Dropzone from 'react-dropzone'
import { Row, Col } from 'antd'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'

import {observer} from 'mobx-react'
import storeEditor from '../stores/dataStoreEditor'
import storeUIEditor from '../stores/uiStoreEditor'


@observer
class ScrollingEditor extends React.Component {
  render() {
    return (
     <div className="editor-root">
      <UserItemList />
     </div>
    )
  }
}

@observer
class UserItemList extends React.Component {
  render () {
    const store = storeEditor
    const SortableList = SortableContainer( () => {
      return (
        <div className="editor-wrapper">
         {store.items.map((item, index) => (
          <UserItem key={index} index={index} item={item} />
         ))
        }
        </div>
      )
    })

    return (
      <SortableList
       axis="x"
       lockAxis="x"
       helperClass='sortableHelper'
       onSortEnd={this.test}
      />
    )
  }

  test = (obj) => {
    storeEditor.swapItems(obj)
    this.setState({})
  }
}

@observer
class UserItem extends React.Component {
  render () {
    const item = this.props.item
    const SortableItem = SortableElement( () => {
     return (
      <div className="editor-item">
       {item.id}
       <img src={item.url} style={{width:"100%"}} />
      </div>
     )
    })

    return (
      <SortableItem index={this.props.index} />
    )
 }
}









export default ScrollingEditor
