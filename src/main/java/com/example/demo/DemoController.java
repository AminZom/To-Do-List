package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class DemoController {

    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("/add")
    public String addTask(@RequestBody Task task) {
        Task newTask = new Task();
        newTask.setTaskName(task.getTaskName());
        newTask.setDescription(task.getDescription());
        taskRepository.save(newTask);
        return "Added new task to repo!";
    }
    
    @PostMapping("/delete")
    public String deleteTask(@RequestBody Task task) {
    	for(Task taskCheck : taskRepository.findAll())
    	{
    		if(taskCheck.getTaskName().equals(task.getTaskName()) && taskCheck.getDescription().equals(task.getDescription()))
    		{
    			taskRepository.delete(taskCheck);
    		}
    	}
        return "Deleted task from repo!";
    }

    @GetMapping("/list")
    public Iterable<Task> getTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/find/{id}")
    public Task findTaskById(@PathVariable Integer id) {
        return taskRepository.findTaskById(id);
    }
}