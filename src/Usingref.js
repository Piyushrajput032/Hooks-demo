import './App.css';
import React,{createRef,useRef,useState,useMemo,useEffect, useCallback, Component} from 'react'
import { Button } from 'react-bootstrap';

// class Usingref extends Component{

//     constructor(){
//         super();
//         this.inputRef=createRef();
//     }
//     componentDidMount(){
//        //console.warn(this.inputRef.current.value='1000') 
//     }
//     getValue(){
//         console.warn(this.inputRef.current.value)
//         this.inputRef.current.style.color='red'
//     }
//     render(){
//         return(
//             <div className='App'>
//         <h1>Ref in react</h1>
//         <input type='text' ref={this.inputRef}/>
//         <button onClick={()=>this.getValue()}>Check ref</button>
//     </div> 
//         );
//     }
// }

const Usingref = () => {
    const refe=useRef(null);
    function handleInput(){
        console.warn("function text")
        // refe.current.value='1000'
        // refe.current.focus();
        refe.current.style.color='red`'
    }
  return (
    <div className='App'>
        <h1>Ref in react</h1>
        <input type='text'ref={refe}/>
    <button onClick={handleInput}>handle input</button>
    </div>
  )
}

export default Usingref