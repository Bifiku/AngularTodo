import { Injectable } from '@angular/core';
import { Category } from '../Model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../Model/Task';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  constructor() {}

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  getTasksByCategories(category: Category): Task[] {
    const tasks = TestData.tasks.filter((task) => task.category === category);
    console.log(tasks);
    return tasks;
  }
}
