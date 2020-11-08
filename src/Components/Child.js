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
     
    const res=[];
    const filteredData=data.filter((item)=>
    {
        var val=true;
      props.con.forEach(doc=>{
          
          if(doc.id==="followers")
          {
              if(doc.operator==="GTE")
              {
                  if(item.followers>=Number(doc.filter)&& val)
                  val=true;
                  else
                  val=false;
              }
              else if(doc.operator==="LTE")
              {
                if(item.followers<=Number(doc.filter) && val)
                  val=true;
                  else
                  val=false;
            }
          }
          if(doc.id==="location")
          {
              if(item.location.includes(doc.filter) && val)
              val=true;
              else
              val=false;
          }
          if(doc.id==="verified")
          {
              if(item.verified===Boolean(doc.filter) && val)
              {
              val=true;
              console.log(item.verified===Boolean(doc.filter),item.verified,doc.filter,item)
              }
              else
              val=false    
          }
        
      })  
        if(val)
        res.push(item)
    })
        // console.log(res)
    


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
                {res.map(user=>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.sname}</td>
                        <td>{user.followers}</td>
                        <td>{user.following}</td>
                        <td>{user.location}</td>
                        <td>{user.verified===true ?"Verified":"Not Verified"}</td>
                    
                    </tr>)}
            </tbody>


           </table>
        </div>
    )
}

export default Child
