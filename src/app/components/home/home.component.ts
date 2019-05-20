import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public taskser:TasksService,
    public title:Title) {
    this.title.setTitle('Task Manager')
    console.log(this.taskser.tasks)
   }

  ngOnInit() {
  }
  DeleteTask(i){
    this.taskser.DeleteTask(i);
  }
}
