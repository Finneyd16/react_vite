import React from 'react'

const Counters = (props) => {
   const {name, email, phone, address}=props
  return (
    <>
      <div className='container'>
        <p>name: {name}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>address: {address}</p>

      </div>
    </>
  )
}

export default Counters
