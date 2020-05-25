import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from '../../interfaces/todo-interface';

@Component({
  selector: 'todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class ToDoMainComponent {
  todoItems: Array<ToDoItem>;
  touchStart: number;
  touchEnd: number;
  showCreatePopUp: boolean = false;

  constructor(private http: HttpClient) {}

  openCreatePopUp(): void {
    this.showCreatePopUp = true;
  }

  closeCreatePopUp(e): void {
    console.log(e)
    this.showCreatePopUp = e;
  }

  getAllToDos() {
    this.http.get<Array<ToDoItem>>("http://127.0.0.1:8080/todo/get")
      .subscribe(response => {
        console.log(response)
        this.todoItems = response;
      })
  }

  updateItems(e) {
    this.todoItems = e;
  }

  ngOnInit() {
    this.getAllToDos();
  }
}
