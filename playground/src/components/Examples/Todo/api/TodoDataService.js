
//https://github.com/axios/axios
import axios from 'axios';

class TodoDataService {
    constructor() {
        this.urlBase = "http://localhost:8080/jasonSpringBoot/todo";
    }

    retrieveAllTodos(name) {
        let path = "/" + name + "/todos";
        //console.log(this.urlBase + path);
        return axios.get(this.urlBase + path);
    }

    retrieveTodo(name, id) {
        let path = "/" + name + "/todos/" + id;
        return axios.get(this.urlBase + path);
    }

    deleteTodoById(name, id) {
        let path = "/" + name + "/todos/" + id;
        return axios.delete(this.urlBase + path);
    }

    updateTodo(name, id, todo) {
        let path = "/" + name + "/todos/" + id;
        return axios.put(this.urlBase + path, todo);
    }

    createTodo(name, todo) {
        let path = "/" + name + "/todos/";
        return axios.post(this.urlBase + path, todo);
    }

}


export default new TodoDataService();