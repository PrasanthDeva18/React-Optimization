import React, { memo } from 'react'

const Name = memo(({name}:any) => {
    console.log('hiiiiiii')
  return (
    <div>Name : {name} </div>
  )
})

export default Name