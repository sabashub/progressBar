import { useState } from "react";
import "./styles.css";

/*
INSTRUCTIONS:
Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {

const [todo, setTodo] = useState([])
  
const[text, setText] = useState("")

    const handleChange = (e) => {
      setText(e.target.value)
      
      e.preventDefault()

    }

    const handleSubmit = () => {
      setTodo([...todo, text])
      setText("")
      
    }
    
    const handleRemove = (e) =>{
      
    var arr = todo.filter(item => item !== e.target.value)
      setTodo(arr)
    
    }

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        handleSubmit();
      }
    }

    


    return (
      <div className="App">
          
        <div className="form">
        <input 
              className="inputText"
              type="text"
              onChange = {handleChange}
              placeholder = "Add todo"
              value={text}
              onKeyDown = {handleKeyDown}
        />
              <button className="btn" type="submit" onClick={handleSubmit}> Add
              </button>
          
          </div>  
          
        <div className="todos">
        {todo.map(todo => {
                return(
                    <div key = {Math.random() * Math.random() * Math.random()} >
                        <li >{todo} <button value = {todo} onClick={handleRemove}>X</button></li>
               
               </div>
            )
          })}
        </div>
            

      </div>  
    )
  
}
