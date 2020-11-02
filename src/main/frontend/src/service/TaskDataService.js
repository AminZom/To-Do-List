import axios from 'axios';

const TASK_API_URL = 'http://localhost:8080'

class TaskDataService {

    retrieveAllTasks() {
        return axios.get(`${TASK_API_URL}/list`);
    }

    retrieveTask(id) {
        return axios.get(`${TASK_API_URL}/list/${id}`);
    }

    addNewTask(name, description) {
        return axios.post(`${TASK_API_URL}/add`, { name, description })
    }
}

export default new TaskDataService()