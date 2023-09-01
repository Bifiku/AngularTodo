import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Model/Category';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
  }

  showTasksByCategories(category: Category) {
    this.dataHandler.getTasksByCategories(category);
  }
}
