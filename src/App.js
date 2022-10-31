import { nanoid } from "nanoid";
import { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import FilterButton from "./components/FilterButton";


const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("All")

  const handleAddTaskChange = event => {
    setInputValue(event.target.value)
  }

  const handleAddTaskSubmit = event => {
    event.preventDefault()
    setTodos([
      ...todos,
      {
        id: nanoid(),
        text: inputValue,
        completed: false
      }
    ])
    setInputValue("")
  }

  const handleAppEdit = (id, editedTodo) => {
    const editedTodos = todos.map((item) => {
      if (id === item.id) {
        return {...item, text: editedTodo}
      }
      return item
    })
      setTodos(editedTodos)
  }

  const handleAppDelete = (id) => {
    const filteredTodos = todos.filter((item) => id !== item.id)
    setTodos(filteredTodos)
  }

  const handleAppCompleted = (id) => {
    const completedTodos = todos.map((item) => {
      if (id === item.id) {
        return {...item, completed: !item.completed}
      }
      return item
    })
    setTodos(completedTodos)
  }

  const todoMap = todos.filter(FILTER_MAP[filter]).map((item) => ( 
    <TodoList 
      todo={item.text}
      id={item.id}
      completed={item.completed}
      handleAppEdit={handleAppEdit}
      handleAppDelete={handleAppDelete}
      handleAppCompleted={handleAppCompleted}
    />
  ))

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      name={name}
      key={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))
  
  console.log(todos)
  return (
    <div style={{display: "grid", placeItems: "center"}}>
      <AddTask 
        handleAddTaskChange={handleAddTaskChange}
        handleAddTaskSubmit={handleAddTaskSubmit}
        type="text"
        name="inputValue"
        value={inputValue}
      />
      {todoMap}
      {filterList}
    </div>
  );
}

export default App;
