import { useState } from "react";



const TodoList = (props) => {
    const [editInputValue, setEditInputValue] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    const handleEditChange = event => {
        setEditInputValue(event.target.value)
    }

    const handleTodoListSubmit = event => {
        event.preventDefault()
        props.handleAppEdit(props.id, editInputValue)
        setEditInputValue("")
        setIsEditing(false)
    }

    const viewTemplate = (
        <div key={props.id} style={{display: "flex", justifyContent: "space-evenly", border: "solid red", width: "200px"}}>
        <input type="checkbox" defaultChecked={props.completed} onChange={() => props.handleAppCompleted(props.id)} />
            <p>{props.todo}</p>
            <button onClick={() => setIsEditing(true)}>edit</button>
            <button onClick={() => props.handleAppDelete(props.id)}>delete</button>
        </div>
    )

    const editTemplate = (
        <form onSubmit={handleTodoListSubmit}>
            <p>{props.todo}</p>
            <input 
                type="text"
                name="editInputValue"
                value={editInputValue}
                onChange={handleEditChange}
            />
            <button type="submit">submit</button>
            <button>cancel</button>
        </form>
    )


    return ( 
        <div>
            {isEditing ? editTemplate : viewTemplate}
        </div>
     );
}
 
export default TodoList;