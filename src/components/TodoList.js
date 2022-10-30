import { useState } from "react";



const TodoList = (props) => {
    const [value, setValue] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    const handleEditChange = event => {
        setValue(event.target.value)
    }

    const handleEditSubmit = event => {
        event.preventDefault()
        props.handleEdit(props.id, value)
        setValue("")
        setIsEditing(false)
    }

    const viewTemplate = (
        <div key={props.id} style={{display: "flex", marginTop: "20px", alignItems: "center"}}>
            <input 
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.handleCompleted(props.id)}
            />
            <p>{props.text}</p>
            <button style={{height: "25px", marginLeft: "15px"}} onClick={() => setIsEditing(true)}>edit</button>
        </div>
    )

    const editTemplate = (
        <form onSubmit={handleEditSubmit}>
            <input 
                type="text" 
                name="value"
                value={value}
                onChange = {handleEditChange}
            />
            <button type="submit">submit</button>
            <button onClick={() => setIsEditing(false)}>cancel</button>
            
        </form>
    )

    return ( 
        <div>
            {isEditing ? editTemplate : viewTemplate}
        </div>
     );
}
 
export default TodoList;