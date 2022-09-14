import React from 'react'
import { useState } from 'react'
import styles from './Search.module.css'
import {useDispatch,useSelector} from 'react-redux'
import Add from './Add'
import { searchfields,clearfields } from '../features/Cardlist'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import Home from './Home'
const Search = () => {
  const [open,seopen]=useState(false)
  const cardlist=useSelector(state=>state.cartlist.value)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  /*(function handlefilter(e){
    const searchword=e.target.value;
    const newfilter=cardlist.filter((item)=>{
      return item.Ticket.includes(searchword)
    })
    dispatch(searchfields(newfilter))
  }*/
 
  function handlefilter(e){
    var search=e.target.value
      const fillterresult=cardlist.filter(cards=>cards.Ticket.toLowerCase().includes(search) || cards.Description.toLowerCase().includes(search))
      dispatch(searchfields(fillterresult))
      
  }

  return (
    <div className={styles.Search}>
     <div className={styles.div}><h6 className={styles.h6}>Relevel</h6><h2 className={styles.h2}>Relevel Trello</h2></div>
     <form>
     <input onChange={handlefilter}  className={styles.input} placeholder='search....'/>
      <button type="reset" className={styles.cross}>x</button>
     </form>
      <button className={styles.btn} onClick={()=>seopen(true)}>ADD CARD</button>
      {open && <Add seopen={seopen}/>}
      
    </div>
  )
}

export default Search
