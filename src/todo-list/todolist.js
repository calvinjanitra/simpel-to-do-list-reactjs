import "./todolist.css";

const todolist = (props) => {
    console.log(props);
    return (
        <ul>
            {props.data.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>;
            })}
        </ul>
    );
};

export default todolist;
