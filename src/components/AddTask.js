


const AddTask = (props) => {

    
    return ( 
        <form onSubmit={props.handleAddTaskSubmit}>
            <input 
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.handleAddTaskChange}

            />
            <button type="submit">submit</button>
        </form>
     );
}
 
export default AddTask;