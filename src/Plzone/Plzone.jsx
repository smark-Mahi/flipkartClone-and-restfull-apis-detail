import React from 'react'
import { Link } from 'react-router-dom'
import lion from '../assets/images/lion.png'
import Card from './Card'
import styles from './Plzone.module.css'
import Table from './Table'
import { Data } from './teams/teams'
const Plzone = () => {
  return ( 
    <div>
    <div className={styles.thumbnail}>
    <p className={styles.clubsites}>Club sites:</p>
    <h2 className={styles.h2}>Premier League</h2>
    {
      Data.teams.map((items)=>
      <div className={styles.thumbnails}>
      <Link to='/plzone'>
        <img src={items.images.creast} className={styles.thum}/></Link>
      </div>)
    }
    </div>
    <div className={styles.Nav}>
      <div className={styles.logo}>
        <img src={lion} className={styles.img}/>
      </div>
        <p className={styles.p}>No room for racism</p>
    </div>
      <Card/>
      <Table/>
    </div>
  )
}

export default Plzone
