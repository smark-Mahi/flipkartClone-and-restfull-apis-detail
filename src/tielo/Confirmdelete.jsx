import React from 'react'
import styles from './Confirmdelete.module.css'
import {useDispatch} from 'react-redux'
import { deletefields } from '../features/Cardlist'
const Confirmdelete = ({setopen,deletee}) => {
  const dispatch=useDispatch()
  function Confirmdelete(id){
    dispatch(deletefields({id:id}))
    setopen(false)
  }
  return (
    <div className={styles.model}>
    <div className={styles.container}>
        <h1 className={styles.confirm}>Confirmation<span className={styles.mark}>!</span></h1>
        <h4>Do you really want to delete?</h4>
        <button className={styles.yes} onClick={()=>Confirmdelete(deletee)}>Yes</button>
    </div>
    </div>
  )
}

export default Confirmdelete
