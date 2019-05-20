import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Array<Task>=[
  ];
  constructor() { 
    let savedTasks = localStorage.getItem('tasks') 
    if(savedTasks) this.tasks=JSON.parse(savedTasks)
    else{
      this.tasks=[];
    }
  }
  DeleteTask(i){
    this.tasks.splice(i,1);
    this.SaveTasks();

  }
 
  saveTask(title,disc){
    this.tasks.push({title:title,description:disc})
    this.SaveTasks();

  }

  editTask(i, data){
    this.tasks[i]=data;
    this.SaveTasks();
  }
  SaveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
}
