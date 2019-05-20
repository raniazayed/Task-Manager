import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskser:TasksService,
    private router:Router,
    private title:Title) {
      this.title.setTitle('Add-Task')
     }

  ngOnInit() {
  }
  DeleteTask(i){
    console.log(i)
    this.taskser.DeleteTask(i);
    this.router.navigate(['home']);

  }
 
  saveTask(title,disc){
    this.taskser.saveTask(title.value,disc.value);
    this.router.navigate(['home']);
  }
}
