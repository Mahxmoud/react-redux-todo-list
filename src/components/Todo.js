import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";
import { ListGroup } from "react-bootstrap";
const Todo = ({ todo, toggleTodo }) => (
    <ListGroup.Item action variant="warning" className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "✅" : ""}{" "}
        <span
            className={cx(
                "todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
            )}
        >
            {todo.content}
        </span>
    </ListGroup.Item>
);

// export default Todo;
export default connect(
    null,
    { toggleTodo }
)(Todo);
