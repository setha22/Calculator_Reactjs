import { useState } from 'react'
import History from "./component/HIstory";
import Calculator from "./component/Calculator";
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [value, setValue] = useState("");

  return (
    <>
    <div>
    <Calculator/>

    </div>
      

    </>
  )
} 

export default App
