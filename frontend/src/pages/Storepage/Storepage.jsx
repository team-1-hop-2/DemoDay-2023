import React from 'react'
import { Store } from './assets/comp/scroller';
import './assets/css/Storepage-Main.css';

export const Storepage = () => {
  return (
    <div className='main'>
        <div className='buffermain'>
        <div className='head'>
            <div className='head-sub'>
              <div>Header Componenet here?</div>
            </div>
        </div>
        <div className='body'>
          <Store/>
        </div>
        <div className='foot'></div>
        </div>
    </div>
  )
}