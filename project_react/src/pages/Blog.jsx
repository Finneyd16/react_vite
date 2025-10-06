import React from 'react'

const Blog = () => {
  return (
    <>
    <div className='blog-container d-flex justify-content-center align-items-center' >
        <div className='blog-text px-5 col-sm-12 col-md-12 col-lg-6' >
        <h2>Simple design & prototyping</h2>
        <p className='w'>Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. </p>
      </div>
      <div className='blog-button col-sm-12 my-5 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
        <button className='btn1 mb-3 mt-n5'>Get Started</button>
        <small>It is absolutely free.</small>
      </div>

    </div>
      
    </>
  )
}

export default Blog
