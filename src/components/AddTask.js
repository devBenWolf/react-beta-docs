


const AddTask = (props) => {

    
    return ( 
        <div>
            <input 
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            />
            <button type="submit" onClick={props.handleAddTodo}>submit</button>
        </div>
     );
}
 
export default AddTask;