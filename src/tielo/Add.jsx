import React from 'react'
import { useState } from 'react'
import styles from './Add.module.css'
import { useDispatch } from 'react-redux'
import {addfields} from '../features/Cardlist'
import uuid from 'uuid'
const Add = ({seopen}) => {
  const {v4:uuidv4}=require('uuid')
  const newid=uuidv4()
  const [Ticket,setticket]=useState('')
  const [Description,setdescription]=useState('')
  const [err,seterr]=useState(false)
  const dispatch=useDispatch()
  function handleadd(e){
    e.preventDefault();
    if(Ticket.length<34 && Description.length<100){
      dispatch(addfields({
        Ticket,Description,id:newid
      }))
    }
    else{
      seterr(true)
    }
  }
  return (
    <div className={styles.model}>
    <div className={styles.container}>
      <form className={styles.form} action="">
        <label className={styles.label}>Ticket Title</label><br/>
        <input type="text"  placeholder='Enter title' onChange={(e)=>setticket(e.target.value)} className={styles.input} /><br/>
        {err?<span>you cannot enetr more than 34 characters</span>:''}
        <label className={styles.label}>Description</label><br/>
        <input type="text" placeholder='Enter Description' onChange={(e)=>setdescription(e.target.value)} className={styles.input} /><br/>
        {err?<span>you cannot enetr more than 100 characters</span>:''}
        <button className={styles.save} onClick={handleadd}>Save</button>
        <button className={styles.close} onClick={()=>seopen(false)}>Close</button>
      </form>
    </div>  
    </div>
  )
}

export default Add
