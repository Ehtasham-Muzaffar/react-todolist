import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [oldstate,newstate] = useState("")
  const [items,newitems] = useState([])
  const Textchange = (event) => {
    // console.log(event.target.value) 
    let value=event.target.value
    newstate(value)
    
  }
  const Btnclick=()=>{
    
    newitems((oldvalues)=>{
return [...oldvalues,oldstate]
    })

   
  }
  return (
    <div className="App">
      <div className="box1">
        <div className="todobox">
          <h1>todo list</h1>
          <div className="textfile">
            <input type="text" onChange={Textchange} />
            <button onClick={Btnclick} >Add value</button>
          </div>
          {
            
            items.map((lists,index)=>{
              function Deleted(id){
               console.log(id)
               newitems((oldvalues)=>{
               return oldvalues.filter((arg,index)=>{
                 return index !== id;

                 })
               })
}
              return <> 
            <button  onClick={()=>Deleted(index)}>deleted</button> <h4>{lists}</h4>
              </>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
