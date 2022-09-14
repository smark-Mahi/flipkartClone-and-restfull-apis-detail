import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styles from './Product.module.css'
import styled from 'styled-components'
import { deletecart } from '../features/makupcart'
const Addtocart = () => {
  const makeupcart=useSelector(state=>state.makeupcart.value)
  console.log(makeupcart)
  const dispatch=useDispatch()
  /*function handleminus(id){
    setstate(!state)
    if(stock==1){
      dispatch(deletecart({id:id}))
    }else{
      setstock(stock-1)
    }
  }
  function handleadd(stocks,id){
    setstate(!state)
    if(id && stock!=stocks){
      setstock(stock+1)
    }
  }*/
  function handlequantity(id,quantity,stock){
    if(quantity<=stock){
      dispatch(deletecart({id,quantity}))
    }else{
      return <h5 className={styles.h5}>sorry!we have this {stock} much stock only</h5>
    }
  }
  return (
    <Wrapper>
      {
        makeupcart.map((item)=>
        <Cards className={styles.Cards}>
        <div>
        <img src={item.image}/>
        </div>
          <div className={styles.div}>
          <h3>{item.Title}</h3><br/>
          <div className={styles.line}>
          <h4>₹{item.price}</h4>&nbsp;
          {item.discount?<h4>{item.discount}</h4>:''}
          </div>
          <h4>Avalibility&nbsp;{item.stock}</h4>
          {}
          <input type="text"  value={item.quantity} className={styles.input} />
          <button className={styles.button1} onClick={()=>handlequantity(item.id,item.quantity-1,item.stock)}>-</button>
          <button onClick={()=>handlequantity(item.id,item.quantity+1,item.stock)} className={styles.button2}>+</button>
         
          </div>
        </Cards>)
      }
      {makeupcart.length==0?<h2 className={styles.h2}>cart is empty...</h2>:''}
    </Wrapper>
  )
}
const Wrapper=styled.div`
width: 100vw;
height: 100vh;
position: relative;
top: 25px;
font-family: monospace;
font-size: 1em;
display: flex;
flex-wrap: wrap;
margin-left: 10px;
margin-top: 20px;
`;
const Cards=styled.div`
width: 80vw;
height: 45vh;
margin-left: 14px;
margin-top: 20px;
padding: 10px;
position: relative;
box-shadow: 2px 2px 2px 1px rgba(115, 108, 108, 0.395);
display: flex;
word-wrap: break-word;
img{
  width: 270px;
  height: 270px;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid rgba(91, 86, 86, 0.727);
} 
h3{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
}
`


export default Addtocart
