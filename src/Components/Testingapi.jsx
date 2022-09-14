import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Testingapi = () => {
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [gender,setgender]=useState("")
    const [data,setdata]=useState([])

    const getdata=async()=>{
        const response=await fetch('https://forbae-practice.herokuapp.com/user/all');
        const data=await response.json();
        console.log(data)
        setdata(data)
    }
    const handlesave=async(e)=>{
        e.preventDefault();
    try{
        const resp=await axios.post('https://forbae-practice.herokuapp.com/user/create',{
        username:username,
        email:email,
        password:password,
        gender:gender
    });
    console.log(resp.data)
    }catch(err){
        console.log(err.response)
    }
    }
    useEffect(()=>{
      console.log('ran')
     
      getdata()
    },[])
    const handledelete=async(id)=>{
        //const newfields=data.filter((items)=>items.id!==id)
        //setdata(newfields)
        const newfields=axios.delete(`https://forbae-practice.herokuapp.com/user/delete/${id}`);
        setdata(newfields)

    }
  return (
    <div>
       <form action="">
       <label>username:</label>
        <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} /><br></br>
        <label>email:</label>
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} /><br/>
        <label>password:</label>
        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} /><br/>
        <label>gender:</label>
        <input type="text" value={gender} onChange={(e)=>setgender(e.target.value)} /><br/><br/>
        <button onClick={handlesave}>save</button><br/><br/>
       </form>
       {
        data.map((items)=>
            <div>
                <h2>{items.id}</h2>
                <h2>{items.username}</h2>
                <button onClick={()=>handledelete(items.id)}>Delete</button>
            </div>
        )
       }
    </div>
  )
}

export default Testingapi
