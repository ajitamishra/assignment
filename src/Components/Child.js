import React, { useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import './table.css'
const doc={
    id:"",
    operator:"",
    filter:""
  }
function Child(props) {
    const [document,setDocument]=useState([]);
    const {doc}=props;
    const data= MOCK_DATA;
    const columns=['Name','ScreeName','Followers','Following','Location','Verified']
    const filteredData=data.filter((item)=>{
       
        if(item.followers >= Number(doc.filter))
        {
        console.log('docfilter',doc.filter,'item',item)
        return item
        }
    })
     React.useEffect(()=>{
        
      setDocument([...document,{filteredData}])
     },[])
    return (
        <div>
           <table>
            <thead>
                {
                    columns.map(column=>
                        <th>{column}</th>
                        )
                }
            </thead>
            <tbody>
                {filteredData.map(user=>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.sname}</td>
                        <td>{user.followers}</td>
                        <td>{user.following}</td>
                        <td>{user.location}</td>
                        <td>{user.verified}</td>
                    
                    </tr>)}
            </tbody>
           </table>
        </div>
    )
}

export default Child
