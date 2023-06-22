import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//_________________________________________________________________________________
export class DashboardComponent implements OnInit{

  constructor(private router: Router, private TaskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

//_________________________________________________________________________________
  loadTasks(){
    console.log ('Carregar as tasks');
    this.tasks = this.TaskService.tasks
  }

//_________________________________________________________________________________

user = "Patrick"



tasks: Task[] = [];

addTask(){
  this.router.navigateByUrl('/task', {
    state: this.tasks,
  
      });
  }

}
