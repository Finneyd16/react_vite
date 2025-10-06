import React from 'react'
import {P1, P2, P3, P4} from '../assets/Index.jsx'

const Gallery = () => {
  return (
    <>
    <h1>Gallery</h1>
    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-4'>
            <img src={P1} alt="" className='w-100' />
        </div>
        <div className='col-sm-12 col-md-12 col-lg-4'>
            <img src={P2} alt="" className='w-100' />
        </div>
        <div className='col-sm-12 col-md-12 col-lg-4'>
            <img src={P3} alt="" className='w-100' />
        </div>
        <div className='col-sm-12 col-md-12 col-lg-4'>
            <img src={P4} alt="" className='w-100' />
        </div>
      
    </div>
      
    </>
  )
}

export default Gallery
