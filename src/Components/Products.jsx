import React from 'react'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { addcart } from '../features/makupcart'
import styled from 'styled-components'
import styles from './Product.module.css'
import discount from '../features/discount'
const Products = ({item}) => {
  const [state,setstate]=useState(false)
    const dispatch=useDispatch()
    function handleadd(item){
      dispatch(addcart(item
      ))
      setstate(true)
      console.log(item.id)
    }
    let newprice=0
    if(item.discount){
      newprice=Math.floor((item.price*(100-item.discount.slice(0,2)))/100)
    }
    else{
      newprice=null
    }
  return (
      <Cards className={styles.Cards}>
        <Link to={`/products/${item.id}`}><imgcontainer><img src={item.image}/></imgcontainer></Link>
        <container>
        {state?<button onClick={()=>handleadd(item)} disabled style={{backgroundColor:`green`}}>Already added</button>:
        <button onClick={()=>handleadd(item)}>Add to cart</button>}
        <h5>{(item.Title).length<=5?item.Title:`${(item.Title).slice(0,7)}...`}</h5>
        {item.discount?<h5 style={{textDecoration:`line-through`}}>₹{item.price}</h5>:<h5>₹{item.price}</h5>}
        {item.discount?<h5 on>{item.discount}&nbsp;discount</h5>:''}
        {newprice && <h5>₹{newprice}</h5>}
        </container>
      </Cards>
   
  )
}
const Cards=styled.div`
width: 17vw;
height: 65vh;
margin-left: 14px;
margin-top: 20px;
position: relative;
box-shadow: 2px 2px 2px 1px rgba(115, 108, 108, 0.395);

img{
  width: 220px;
  height: 220px;
  padding: 5px;
  border-radius: 3px;
} 
  button{
  width: 120px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 45px;
  background-color:blueviolet;
  color: white;
  border-radius: 3px;
  border: none;
  transition: all 0.5s;
  
  &:hover{
    background-color:gainsboro;
    color: white;
  }
}
h5{
  text-align: center;
}
`


export default Products
