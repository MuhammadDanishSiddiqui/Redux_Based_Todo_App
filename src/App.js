import './App.css';
import React, { useState } from "react"
import { connect } from "react-redux"
import { addTodo, updateTodo, deleteTodo,toggleTodo } from "./Redux/actions"


function App(props) {
  const [item, setItem] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [editedIndex, setEditedIndex] = useState()

  const handleAdd = () => {
    console.log(item)
    props.addTodo({completed:false,text:item})
    setItem("")
  }
  const handleDelete = (id) => {
    console.log(id)
    props.deleteTodo(id)
  }
  const handleEdit = (id) => {
    setIsEdit(true)
    setEditedIndex(id)
    setItem(props.todos[id].text)
  }
  const handleUpdate = () => {
    props.updateTodo(editedIndex, item)
    setIsEdit(false)
    setItem("")
    setEditedIndex("")
  }
  const incompleteTodos=props.todos.filter((todo,index)=>{
      return !todo.completed
    })
  
  return (
    <div className="wrapper">
      <div className="todo_wrapper">
        <div className="header">
          <h2>Todo App</h2>
        </div>
        <div className="input_field">
          <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Add things todo..." />
          {isEdit ? <button onClick={handleUpdate} className="update_btn">Update</button> : <button onClick={handleAdd} className="add_btn">Add</button>}
        </div>
        <h4 style={{margin:"5px 0",textAlign:"center"}}>{`You have ${incompleteTodos.length} todos left`}</h4>
        <ul className="todo_list">
          {props.todos.map((todo, index) => {
            return <li key={index} className="list">
            <div className="check">
            <input type="checkbox" checked={todo.completed} onChange={() => props.toggleTodo(index)} />
            <p style={{marginLeft:"10px"}}>{todo.text}</p>
            </div>
                          
              <div>
                <button onClick={()=>handleEdit(index)} className="edit_btn">Edit</button>
                <button onClick={()=>handleDelete(index)} className="delete_btn">Delete</button>
              </div>
            </li>
          })

          }

        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ todos: state.todos })

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addTodo: (todo) => dispatch(addTodo(todo)),
    toggleTodo: (todo) => dispatch(toggleTodo(todo)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    updateTodo: (id, value) => dispatch(updateTodo(id, value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
