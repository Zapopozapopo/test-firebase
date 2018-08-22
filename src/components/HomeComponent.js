import React, {Component} from 'react'
import './HomeComponent.scss'
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='content'>
                    <div className='card'>
                        <div className='card-title'>
                            Todo List
                        </div>
                        <div className='card-body'>
                            <TodoForm onSubmit={this.props.addTodo}/>
                            <TodoList todoList={this.props.todoList}/>
                            {this.props.isFetching?<div className="lds-dual-ring"/>:null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}