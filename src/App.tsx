import { lazy, Suspense, useState } from 'react'
import './App.css'
// import Admin from './Admin'
import AdminSkeleton from './AdminSkeleton'
import Memo from './Memo'
import Name from './Name'

function delayfn(resolve:any):any{
  return new Promise(resolve =>  setTimeout(resolve, 1000)).then(()=> resolve)

}

const Admin:any  = lazy(() => delayfn(import('./Admin')))

function App() {

  const [name,setName] = useState('')
  const [rollno,setRollNo] = useState('')
  return (
    <>
     <p>Prasanth</p>
     <Suspense fallback={'Loading.............'}>
      <Admin/>
     </Suspense>
     {/* <Memo name={name} setName={setName} rollno={rollno} setRollNo={setRollNo}/>
     <Name name={name}/> */}
    </>
  )
}

export default App
