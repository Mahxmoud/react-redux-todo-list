import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Form, Button } from "react-bootstrap";
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    };

    render() {
        return (
            <div className='add-tasks' >
                <Form.Control type="text" onChange={e => this.updateInput(e.target.value)}
                    placeholder="Enter Your Task"
                    style={{width: '40%', marginRight: '20px', justifySelf: 'center'}}/>
                <Button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo);