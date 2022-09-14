import React, { useEffect, useState } from 'react'
import './Side.css'
import {BsArrowLeftCircle} from "react-icons/bs";
import {BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
const Side = () => {
    const [open,setopen]=useState(true)
    const [txt,settxt]=useState(true)
    const navigate=useNavigate()
  return (
    <div className="flex">
      <div className={open?"sidebar":"halfsidebar"}>
      {open &&<BsArrowLeftCircle className="close" onClick={()=>setopen(false)}/>}
      {!open &&<BsArrowRightCircle onClick={()=>setopen(true)} className="open"/>}
      <div className='side'>
      <div className='hr' style={{borderBottom:`1px solid rgba(105, 102, 102, 0.635)`,fontWeight:`700`}}>
      {open?<h3 style={{marginLeft:`40px`}} className='h3'>Relevel</h3>:<h3 className='h3' style={{marginLeft:`40px`}}>Rl</h3>}
      </div>
      <div className='div'>
      <div className='container'>
      <AiOutlineHome className='icon'/>
      </div>
      {open &&  <h5 className='text' style={{position:`relative`,left:`70px`}}>Home</h5>}
       </div>
      <div className='div'>
        <div className='container'>
        <AiOutlineMenu className='icon'/>
        </div>
       {open &&  <h5 className='text' style={{position:`relative`,left:`70px`}}>Search</h5>}
      </div>
      <div className='div'>
        <div className='container'><AiOutlineHeart className='icon'/>
        </div>
        {open &&  <h5 className='text' style={{position:`relative`,left:`70px`}}>friends</h5>}
      </div>
      <div className='div'>
        <div className='container'>
        <AiOutlineHeart className='icon'/>
        </div>
        {open &&  <h5 className='text' style={{position:`relative`,left:`70px`}}>friend request</h5>}
      </div>
      <div className='div' onClick={()=>navigate('/facebook/profile')}>
        <div className='container'>
        <FiEdit2 className='icon'/>
        </div>
        {open &&  <h5 className='text' style={{position:`relative`,left:`70px`}}>Edit</h5>}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Side
