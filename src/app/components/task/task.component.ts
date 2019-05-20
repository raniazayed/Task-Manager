import { Task } from './../../interfaces/task';
import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskId;
  task;
  constructor(private taskser:TasksService,
    private route:ActivatedRoute,
    private router:Router,
    private title:Title) { 
      if(this.task){
        
        this.title.setTitle(this.title+'Task-Manager')
      }else{
        this.title.setTitle('Edit-Task')

      }
    console.log(this.taskser.tasks)

  }

  ngOnInit() {
    this.taskId =this.route.snapshot.paramMap.get('id');
    this.task=this.taskser.tasks[this.taskId];
    console.log(this.taskId)
  }
  DeleteTask() {
    console.log(this.taskId);
    this.taskser.DeleteTask(this.taskId);
    this.router.navigate(['home']);
  }
  saveTask(){
    this.taskser.editTask(this.taskId,this.task);
    this.router.navigate(['home']);
  }

}
