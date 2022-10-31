
const FilterButton = (props) => {
    return ( 
        <button
            key={props.key}
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            {props.name}
        </button>
     );
}
 
export default FilterButton;