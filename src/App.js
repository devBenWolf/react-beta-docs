import {useState} from "react"
import { nanoid } from "nanoid"
import AddTask from "./components/AddTask"
import TodoList from "./components/TodoList"



function App() {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleAddTodo = () => {
    const newTodo = {id: nanoid(), text: value, completed: false}
    setTodos([...todos, newTodo])
    setValue("")
  }

  const handleEdit = (id, editedTodo) => {
      console.log(editedTodo)
    const editTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {...todo, text: editedTodo}
      }
      return todo
    })
    
    setTodos(editTodos)
  }

  const handleCompleted = (id) => {
    const updateCompleted = todos.map((item) => {
      if (id === item.id) {
        return {...item, completed: !item.completed}
      }
      return item
    })
    
    setValue(prevState => ({
      ...prevState,
      completed: updateCompleted
    }))
  }


  const todoMap = todos.map((item) => (
    <TodoList 
      id={item.id}
      text={item.text}
      completed={item.completed}
      handleEdit = {handleEdit}
      handleCompleted={handleCompleted}
    />
  ))
  

  return (
    <div style={{display: "grid", placeItems: "center"}}>
      <AddTask 
        type="text"
        name="value"
        value={value}
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
      />
      {todoMap}
    </div>
  );
}

export default App;
