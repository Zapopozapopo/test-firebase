import React, {Component} from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {todo: '', error:true}
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({todo: value},()=>{this.validate(value)});

    };

    validate=(value)=>{
        if(!value){
            this.setState({error:true})
        }else{
            this.setState({error:false})
        }
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.todo);
        this.setState({todo:'', error:true})
    };

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Todo</label>
                        <div className='input-group'>
                            <input type='text' className='form-control' value={this.state.todo}
                                   onChange={this.handleChange} placeholder={'todo'}/>
                            <div className="input-group-append">
                                <button disabled={this.state.error} type='submit' className='btn btn-outline-primary' >Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}