import React from 'react'
import {Data} from './teams/teams'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div className={styles.container}>
    <h2>Clubs</h2>
    <div className={styles.card}>
      {
        Data.teams.map((items)=>
        <div className={styles.cards}>
        <Link to={`/card/${items.id}`}>
          <img className={styles.stadium} src={items.images.stadium}/>
          <img className={styles.creast} src={items.images.creast}/>
          <div className={styles.text}>
            <h4>{items.meta.name}</h4>
            <p>{items.meta.stadium}</p>
            <h6>Club Profile--></h6>
          </div>
        </Link>
        </div>
        )
      }
      </div> 
    </div>
  )
}

export default Card
