import React,{Component} from 'react'

export default class TodoList extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const {todoList} = this.props;
        return(
            <div className='todo-list w-100'>
                <ul className='list-group'>
                    <li className='list-group-item active'>To-dos:</li>
                    {
                        todoList.map((item,index)=>{
                            return <li className='list-group-item' key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}