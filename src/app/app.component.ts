import { Component, OnInit } from '@angular/core';

import { ToDoMainComponent } from "./components/todo-main/todo-main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';

  ngOnInit(): void {
  }

  
}
