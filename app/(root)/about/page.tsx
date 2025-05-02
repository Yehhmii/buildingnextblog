import React from 'react'

const page = async () => {
  const response = await fetch('http://localhost:3000/api/books')
  const data = await response.json()
  return (
    <>
    <div>
      <h2 className='text-2xl'>About </h2>
       </div>
      <div>
      {data.map((book: { id: number; title: string; author: string }) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
      </div>
    
    </>

  )
}

export default page