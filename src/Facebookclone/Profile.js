import React from 'react'
import styles from './Profile.module.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import {BsArrowRightCircle } from "react-icons/bs";
import {BsArrowLeftCircle} from "react-icons/bs";
const Profile = () => {
  function handlesave(){
    alert('successful')
  }
  return (
    <div className={styles.container}>
    <h2>Relevel Social Connector</h2>
    <div className={styles.border}>
    <h6>A place for connecting people</h6>
     <form action="#" >
     <h4 className={styles.h3}>Profile Settings</h4>
     <div className={styles.userdetails}>
        <div className={styles.inputbox}>
          <span className={styles.details}>Name</span>
          <input className={styles.input} type="text" placeholder='Enter your name' required />
        </div>
        <div className={styles.inputbox}>
          <span className={styles.details}>surname</span>
          <input className={styles.input} type="text" placeholder='Enter your surname' required />
        </div>
        <div className={styles.inputbx}>
          <span className={styles.details}>Phone number</span><br/>
          <input className={styles.inputt} type="text" placeholder='Enter your phone number' required />
        </div>
        <div className={styles.inputbx}>
          <span className={styles.details}>Address</span><br/>
          <input className={styles.inputt} type="text" placeholder='Enter your address' required />
        </div>
        <div className={styles.inputbx}>
          <span className={styles.details}>email</span><br/>
          <input className={styles.inputt} type="text" placeholder='Enter your email' required />
        </div>
        <div className={styles.inputbx}>
          <span  className={styles.details}>Education</span><br/>
          <input className={styles.inputt} type="text" placeholder='Enter your education' required />
        </div>
        <div className={styles.inputbox}>
          <span className={styles.details}>country</span>
          <input className={styles.input} type="text" placeholder='Enter your country' required />
        </div>
        <div className={styles.inputbox}>
          <span className={styles.details}>state/Region</span>
          <input className={styles.input} type="text" placeholder='Enter your state' required />
        </div>
        <button className={styles.btn} onClick={handlesave}>SAVE PROFILE</button>
     </div>
     </form>
     </div>
    </div>
  )
}

export default Profile
