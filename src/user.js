import React,{useEffect, useState} from 'react'
import { Button,text } from 'react-bootstrap';

const User = () => {
    const [data,setData]=useState(
        [
            {stnam:'prince',class:'14'},
            {stnam:'piyush',class:'1'},
            {stnam:'choti',class:'kg'},
        ]
    )
    const [name,setName]=useState("")
    const [classes,setClasses]=useState('')
    useEffect(()=>{
        if (name === '') {
            console.warn('i am initilize')
        }
        if (name > '') {
            console.warn('i am update')
        }

        return ()=>{

            console.warn('i am unmounter')
        }
        

    },[name])
    
  return (
    <div>
        <h1>Data list</h1>
        <ol>
            {data.map((item)=>{
                return(
                <li key={item.stnam}>{item.stnam} is  in class {item.class}</li>
                )
            })}
        </ol>
        <input type='text' placeholder='type your name' onChange={(event)=>setName(event.target.value)}></input>
        <br/><br/>
        <input type='text' placeholder='enter your class ' onChange={(event)=>setClasses(event.target.value)}></input>
        <br/><br/>
        <Button onClick={()=>setData([...data,{stnam:name,class:classes}])}>Add me in the list</Button>
    </div>
  )
}

export default User