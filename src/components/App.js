import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

const [user, setUser]= useState({name:"", email:"", phoneNumber:"", password:"", })
const [selectedOption, setSelectedOption] = useState("male")
console.log(selectedOption)
const [error, setError] = useState("")

function handleSubmitBtn(){
  if(!user.name || !user.email || !user.password || !user.phoneNumber){
    setError("All fields are mandatory")
    return
  }
  if(!(/^[a-z0-9 ]+$/i.test(user.name))){
    setError("Name is not alphanumeric.")
    return
  }
  if(!user.email.includes("@")){
    setError("Email must contain @.")
    return
  }
  if(selectedOption !== "male" || selectedOption!== "female" || selectedOption!== "other"){
    setError("Please identify as male, female or others.")
    return
  }
  if(!(/^[0-9]+$/.test(user.phoneNumber)) ){
    setError("Phone Number must contain only numbers.")
    return
  }
  if(user.password.length > 6){
    setError("Password must contain atleast 6 letters")
    return
  }
  
}


  return (
    <div id="main">

    <label >Name</label>
      <input type="text" placeholder="Enter Name"   value={user.name} onChange={(e)=>setUser({...user, name:e.target.value})} data-testid = "name"/><br/><br/>

      <label >Email</label>
      <input type="email" placeholder="Enter Email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})} data-testid = "email"  /><br/><br/>

      <label >Gender</label>
      <select name="gender"  value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)} data-testid = "gender">
        <option vlaue="">Select gender</option>
        <option value="male" >male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select><br/><br/>

      <label>Phone Number</label>
      <input type="text" value={user.phoneNumber} onChange={(e)=>setUser({...user, phoneNumber:e.target.value})} data-testid ="phoneNumber" /><br/><br/>

      <label >Password</label>
      <input type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})} data-testid ="password"  /><br/><br/>

      <button data-testid = "submit" onClick={handleSubmitBtn}>Submit button </button>
      {error && <p>Error Message: {error}</p>}

    </div>
  )
}


export default App;
