import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todos';

class TodoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newTodoText: ''
        } 
        console.log(props);
    }
 
    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({newTodoText: ''});
    }

    render(){
        return (
            <div>
                <ul>
                    {this.props.todos.map(item => (
                    <li key={item.id}>{item.text}</li>
                    ))}
                </ul>

                <input type="text" value={this.state.newTodoText} onChange={(e) => this.setState({newTodoText: e.target.value})} />
                <br />
                <button onClick={this.addNewTodo}>Salvar Novo Todo</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);