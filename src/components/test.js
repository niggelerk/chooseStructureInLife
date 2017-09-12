import React from 'react'
import ReactDOM from 'react-dom'
import MyStore from '../stores/storeEditor'
import {observer} from 'mobx-react'
import { Button } from 'antd'

@observer
class Test extends React.Component {

 render () {
   const data = MyStore

   return (
    <div>
     {data.images.map( (item,index) => {
        return <div key={index}> {item} </div>
     })}
     {data.images.length === 0 && <div> nix mehr drin </div>}
     <Button type="primary" onClick={data.addNumber}>add number</Button>
     {data.images.length > 0 &&
       <Button type="primary" onClick={data.removeNumber}>remove number</Button>
     }
     <div> Im Array sind {data.images.length} Elemente </div>
    </div>
   )
 }

}





export default Test
