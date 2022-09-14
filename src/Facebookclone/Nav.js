import React from 'react'
import styles from './Nav.module.css'
const Nav = ({state}) => {
  return (
    <>
      <div className={styles.Nav}>
        <p>Relevel connector</p>
        {state?<><button className={styles.btn}>SIGN UP</button><button className={styles.btn}>LOGIN</button></>:
        <button className={styles.btn}>LOG OUT</button>}
      </div>
    </>
  )
}

export default Nav
