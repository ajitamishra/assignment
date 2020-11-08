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
 
    const data= MOCK_DATA;
    const columns=['Name','ScreeName','Followers','Following','Location','Verified']

   var obj=data;
   var filtered=data;

    const filteredData=props.con.map(doc=>
        {
          obj=filtered;
          filtered=()=>{   
              
              if(doc.id=="followers")
                {
                 if(doc.operator=="GTE")
                 {
                     return obj.filter(obj1=>obj1.followers>=Number(doc.filter))
                 }
                 else
                 {
                    return obj.filter(obj1=>obj1.followers<=Number(doc.filter))
                 }
                }
             else if(doc.id=="location")
             {
              if(doc.operator=="CONTAINS")
              {
                  return obj.filter(obj1=>obj1.location.includes(doc.filter))
              }   
              }
            }

         })
         console.log(filteredData)
    
        
    


//    console.log("filteredData",filteredData)
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
                {/* {filteredData.map(user=>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.sname}</td>
                        <td>{user.followers}</td>
                        <td>{user.following}</td>
                        <td>{user.location}</td>
                        <td>{user.verified}</td>
                    
                    </tr>)} */}
            </tbody>


           </table>
        </div>
    )
}

export default Child
