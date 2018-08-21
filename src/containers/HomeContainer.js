import React, {Component} from 'react'
import HomeComponent from "../components/HomeComponent";
import {fetchTodoList, pushTodo} from "../helpers/apiService";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
        this.getTodoList();
    }

    getTodoList = () => {
        fetchTodoList()
            .then(res => {
                Object.keys(res.data).map((key) => {
                    this.setState({todoList: [...this.state.todoList, res.data[key].stringValue]})
                });
            })
            .catch(err => {
                alert(err)
            })
    };

    addTodo = (todo) => {
        pushTodo(todo)
            .then(() => {
                this.setState({todoList:[...this.state.todoList,todo]})
            })
            .catch((err)=>{
                alert(err);
            })
    };

    render() {
        return (
            <HomeComponent addTodo={this.addTodo} todoList={this.state.todoList.reverse()}/>
        );
    }
}

export default HomeContainer