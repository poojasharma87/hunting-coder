import React from 'react'

const Dummy = () => {
  return (
    <>
   <style jsx global>
{`
   .dummy{
    background:yellow;

   }
   
`}
   </style>
    <div className='dummy'>I am dummy dummy</div>
    </>
  )
}

export default Dummy