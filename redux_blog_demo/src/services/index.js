import axios from 'axios'

const ajax = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})
export const getPost = () =>{
    return ajax.get('/posts')
}