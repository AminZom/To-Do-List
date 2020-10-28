package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class DemoController {

    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("/add")
    public String addTask(@RequestParam String taskName, @RequestParam String description) {
        Task task = new Task();
        task.setTaskName(taskName);
        task.setDescription(description);
        taskRepository.save(task);
        return "Added new task to repo!";
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