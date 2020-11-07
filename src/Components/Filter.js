import React from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import Child from './Child'
const doc={
    id:"",
    operator:"",
    filter:""
  }
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
    };
    handleChangeId=e=>{
        this.setState({id:e.target.value})
    }
    handleChangeOperator=e=>{
        this.setState({operator:e.target.value})
    }
    handleSearch=e=>{
      doc.id=this.state.id;
      doc.operator=this.state.operator;
      doc.filter=this.state.filter;
      this.setState({clicked:true})
      console.log(doc)  
      
    }
    render() 
    {
        
      const { filter, data } = this.state;
      const filteredData=data.filter(item=>
        {
            if(item.followers >=filter)
            return item;
        })
     
     
      return (
        <div>
         <select name="filters" id="id" onChange={this.handleChangeId}>
         <option value="location">Location</option>
         <option value="name">Name</option>
         <option value="sname">Screen Name</option>
         <option value="followers">Followers</option>
         <option value="following">Following</option>
          </select>
          { (this.state.id==="followers") ?  <select name="" id="operator" onChange={this.handleChangeOperator}>
      <option value="GTE">{" >= "}</option>
      <option value="LTE">{" <= "}</option> 
          </select>
          :
          null
          }
           {console.log(this.state.id,this.state.operator,this.state.filter)}
          
          <strong>Followers</strong>
          <input value={filter} onChange={this.handleChangeValue} />
          <button onClick={this.handleSearch}>Search</button>
          {
            (this.state.clicked===true)?
          <Child doc={doc}/>: null
          }
        </div>
      );
    }
  }
  export default Filter;