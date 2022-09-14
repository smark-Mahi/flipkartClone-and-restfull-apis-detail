import React from 'react'
import styles from './Card.module.css'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import Confirmdelete from './Confirmdelete'
const Card = () => {
    const cardlist=useSelector(state=>state.cartlist.value)
    console.log(cardlist)
    const [open,setopen]=useState(false)
    const [deletee,setdelete]=useState(null)
    function handledlete(id){
      setdelete(id)
      setopen(true) 
    }
  return (
    <div className={styles.cards}>
       {
        cardlist.map((items)=>
        <div className={styles.Card}>
            <h3>{items.Ticket}</h3>
            <h5 >{items.Description}</h5>
            <button onClick={()=>handledlete(items.id)}>delete</button> 
        </div>)
       }
       {open && <Confirmdelete setopen={setopen} deletee={deletee}/>}
    </div>
  )
}

export default Card
