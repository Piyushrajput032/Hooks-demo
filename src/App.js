
import './App.css';
import React,{useState,useMemo,useEffect, useCallback} from 'react'
import { Button } from 'react-bootstrap';
import User from './user';

function App() {
//   const [count,setCount]=useState(0);
//   const [data,setData]=useState(50);

// // function multicount(){
// //   console.warn("mutlicount called")
// //   return count*5;
// // }
// const multi=useMemo(function multicount(){
//   console.warn('multicount')
//   return count*5
// },[count])

// // let multi=useCallback((a)=>{
// //   console.log("new error")
// //   return(a*6)
// // },[count])
// useEffect(()=>{
//   console.warn('hello')
  
  
// },[count])
const [list,setList] = useState(true)
  return (
    <div className="App">

{list && <User/>}

<button onClick={()=>setList(!list)}>list hide</button>


      {/* <h1>Count:{count}</h1>
      <h2>Data:{data}</h2>
      <h3>{multi}</h3> */}
      {/* <Button style={{margin:'10px'}} variant='dark' onClick={()=>setCount(count+1)}>Update Count</Button>

      <Button onClick={()=>setData(data*41)}>Update Data</Button> */}
    


    
    </div>
  );
}

export default App;
