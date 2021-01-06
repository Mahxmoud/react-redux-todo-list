import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";
import { ListGroup } from "react-bootstrap";
const TodoList = ({ todos }) => (
    <ListGroup className="todo-list">
        {todos && todos.length
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            : "What are we gonna do today?"}
    </ListGroup>
);


const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };

};

export default connect(mapStateToProps)(TodoList);
