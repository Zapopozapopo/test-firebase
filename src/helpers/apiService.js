import axios from 'axios'
import {url} from '../../config';

axios.defaults.headers.common = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};

const baseURL = `${url.protocol}://${url.host}:${url.port}`;

const instance = axios.create({
    baseURL
});

export const pushTodo = (todo) =>{
  return instance.post('/api/todo',{todo})
};

export const fetchTodoList = () =>{
    return instance.get('/api/todos')
};