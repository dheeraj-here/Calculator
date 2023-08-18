import React from 'react'
import './screen.css';

export default function Screen(props) {
  return (
    <>
    <div className='sc'>
    <input className='inp' type='text' readOnly value={props.prop}/>
    </div>
   
  </>
  )
}
