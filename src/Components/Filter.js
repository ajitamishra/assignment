import React from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import Child from './Child';
import _ from "lodash";


const con=[
            {
            id:"",
            operator:"",
            filter:""
           }
         ]


const items=['Name','ScreeName','Followers','Following','Location','Verified'];

const loc=(MOCK_DATA.location);


class Filter extends React.Component {
      state = {
      id: "",
      operator:"",
      filter:"",
      data:MOCK_DATA,
      clicked:false
    };



    
    handleChangeValue = event => {
      this.setState({ filter: event.target.value });
      const doc={
        id:"",
        operator:"",
        filter:""
       }
       doc.id=this.state.id;
       doc.operator=this.state.operator;
       doc.filter=this.state.filter;
      con.push(doc)
      console.log("conditions",con)
     
    };
    handleChangeId=e=>{
        this.setState({id:e.target.value})
    }
    handleChangeOperator=e=>{
        this.setState({operator:e.target.value})
    }
    handleSearch=e=>{
        const doc={
            id:"",
            operator:"",
            filter:""
           }
      doc.id=this.state.id;
      doc.operator=this.state.operator;
      doc.filter=this.state.filter;
      con.push(doc)
      this.setState({clicked:true})

      
    }




   
    render() 
    {




      return (
        <div> 
               
        <span> <select name="filters" id="id" onChange={this.handleChangeId}>
         <option value="location">Location</option>
         <option value="name">Name</option>
         <option value="sname">Screen Name</option>
         <option value="followers">Followers</option>
         <option value="following">Following</option>
          </select>
          </span>


          { (this.state.id==="followers") ?  <span><select name="" id="operator" onChange={this.handleChangeOperator}>
      <option value="GTE">{" >= "}</option>
      <option value="LTE">{" <= "}</option> 
          </select>
          </span>:null
          }



          <span><input value={this.state.filter} placeholder={this.state.id} onChange={this.handleChangeValue} /></span>




          <button onClick={this.handleSearch}>Search</button>
          {
            (this.state.clicked===true)?
          <Child con={con}/>: null
          }
            
        </div>
      );
    }
}
  
  export default Filter;