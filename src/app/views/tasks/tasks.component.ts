import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksHandler: DataHandlerService) {}

  ngOnInit() {
    this.tasks = this.tasksHandler.getTasks();
  }
}
