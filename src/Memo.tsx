import React from 'react'

const Memo = ({name,setName, rollno, setRollNo}:any) => {
  return (
    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='text' value={rollno} onChange={(e) => setRollNo(e.target.value)}/>
    </div>
  )
}

export default Memo