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
        let task = {
            taskName: name,
            description: description
        };
        return axios.post(`${TASK_API_URL}/add`, task)
    }
}

export default new TaskDataService()