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
      clicked:false,
      stringFilter:{
      id:"",
      operator:"",
      filter:""
      },
      integerFilter:{
        id:"",
        operator:"",
        filter:""
        }
    };



    
    
    handleChangeIntegerId=e=>{
        this.setState({id:e.target.value})
        this.setState(prevState => ({
            integerFilter: {                   // object that we want to update
                ...prevState.integerFilter,    // keep all other key-value pairs
                id: e.target.value       // update the value of specific key
            }
        }))
    }
    handleChangeIntegerOperator=e=>{
        this.setState({operator:e.target.value})
        this.setState(prevState => ({
            integerFilter: {                   // object that we want to update
                ...prevState.integerFilter,    // keep all other key-value pairs
                operator: e.target.value       // update the value of specific key
            }
        }))
    }
    handleChangeIntegerFilter = e => {
        this.setState({ filter: e.target.value });
        this.setState(prevState => ({
            integerFilter: {                   // object that we want to update
                ...prevState.integerFilter,    // keep all other key-value pairs
                filter: e.target.value       // update the value of specific key
            }
        }))
      };
    handleChangeStringId=e=>{
        this.setState({id:e.target.value})
        this.setState(prevState => ({
            stringFilter: {                   // object that we want to update
                ...prevState.stringFilter,    // keep all other key-value pairs
                id: e.target.value       // update the value of specific key
            }
        }))
    }
   
    handleChangeStringOperator=e=>{
        this.setState({operator:e.target.value})
        this.setState(prevState => ({
            stringFilter: {                   // object that we want to update
                ...prevState.stringFilter,    // keep all other key-value pairs
                operator: e.target.value       // update the value of specific key
            }
        }))
    }
    handleChangeStringFilter=e=>{
        this.setState({filter:e.target.value})
        this.setState(prevState => ({
            stringFilter: {                   // object that we want to update
                ...prevState.stringFilter,    // keep all other key-value pairs
                filter: e.target.value       // update the value of specific key
            }
        }))

    }
    handleSearch=e=>{
    con.shift()
     con.push(this.state.stringFilter);
     con.push(this.state.integerFilter)
      this.setState({clicked:true})
      console.log(con)

      
    }




   
    render() 
    {
   





      return (
        <div> 
        
        <span> <select name="filters" id="id" onChange={this.handleChangeIntegerId}>
         <option value="name">Name</option>
         <option value="location">Location</option>
         <option value="sname">Screen Name</option>
         <option value="followers">Followers</option>
         <option value="following">Following</option>
          </select>
          </span>


          { (this.state.id==="followers") ?  <span><select name="" id="operator" onChange={this.handleChangeIntegerOperator}>
      <option value="GTE">{" >= "}</option>
      <option value="LTE">{" <= "}</option> 
          </select>
          </span>:null
          }



          <span><input value={this.state.integerFilter.filter} onChange={this.handleChangeIntegerFilter} /></span>



          <span> <select name="filters1" id="id1" onChange={this.handleChangeStringId}>
         <option value="name">Name</option>
          
         <option value="location">Location</option>
         <option value="sname">Screen Name</option>
         <option value="followers">Followers</option>
         <option value="following">Following</option>
          </select>
          </span>
 
          { (this.state.id==="location") ?  <span><select name="" id="operator1" onChange={this.handleChangeStringOperator}>
      <option value="">{" "}</option>
      <option value="CONTAINS">{" contains "}</option>
     
          </select>
          </span>:null
          }

<span><input value={this.state.stringFilter.filter}  onChange={this.handleChangeStringFilter} /></span>
        {/* {console.log("StringFilter",this.state.stringFilter,"IntegerFilter",this.state.integerFilter)} */}
          <button onClick={this.handleSearch}>Search</button>
         
            <Child  con={con}/> 
        </div>
      );
    }
}
  
  export default Filter;