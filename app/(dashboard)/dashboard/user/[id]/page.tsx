import React from 'react'

const userid = ({ params } : { params: { id: string }}) => {
    const { id } = params

  return (
    <>
        <div className='text-3xl'>Personal User Details Page </div>
        <h2 className='text-2xl'> User is: {id}</h2>
      
    </>
  )
}

export default userid