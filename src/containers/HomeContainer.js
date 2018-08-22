import React, {Component} from 'react'
import HomeComponent from "../components/HomeComponent";
import {fetchTodoList, pushTodo} from "../helpers/apiService";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            isFetching:false
        };
    }

    componentWillMount(){
        this.getTodoList();
    }

    getTodoList = () => {
        this.setState({isFetching:true});
        fetchTodoList()
            .then(async res => {
                await Object.keys(res.data).map((key) => {
                    this.setState({todoList: [...this.state.todoList, res.data[key].stringValue]})
                });
                this.setState({isFetching:false});
            })
            .catch(err => {
                this.setState({isFetching:false});
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
            <HomeComponent isFetching={this.state.isFetching} addTodo={this.addTodo} todoList={this.state.todoList.reverse()}/>
        );
    }
}

export default HomeContainer