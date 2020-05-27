import { Component, OnInit, Inject } from '@angular/core';
import { IP, PORT } from 'src/app/exports/constants';
import {
  IconDefinition,
  faCompress,
  faExpand
} from '@fortawesome/free-solid-svg-icons';
import { ToDoDoingDone, ToDoItem } from '../../interfaces/todo-interface';

import { HttpClient } from '@angular/common/http';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class ToDoMainComponent implements OnInit {
  icon: IconDefinition = faExpand;
  imagePath: string = 'assets/todoicon.png';
  todoItems: Array<ToDoItem>;
  touchStart: number;
  touchEnd: number;
  showCreatePopUp: boolean = false;
  todoDoingDone: ToDoDoingDone = {
    todo: 0,
    doing: 0,
    done: 0
  };
  filterTodosByStatus: string = 'none';

  constructor(private http: HttpClient, @Inject(DOCUMENT) private doc: Document) {}
 /**don't use document -> use injectDocument */
  setFullScreen(): void {
    if (document.fullscreen) {
      this.doc.exitFullscreen();
      // document.exitFullscreen();
      this.icon = faExpand;
    } else {
      // document.documentElement.requestFullscreen();
      this.doc.documentElement.requestFullscreen()
      this.icon = faCompress;
    }
  }

  setFilterByStatus(filterType: string): void {
    this.filterTodosByStatus =
      this.filterTodosByStatus === filterType ? 'none' : filterType;
  }

  openCreatePopUp(): void {
    this.showCreatePopUp = true;
  }

  closeCreatePopUp(e): void {
    console.log(e);
    this.showCreatePopUp = e;
  }

  getAllToDos() {
    this.http
      .get<Array<ToDoItem>>(`${IP + PORT}/todo/get`)
      .subscribe(response => {
        console.log(response);
        this.todoItems = response;
        response.forEach(x => {
          this.todoDoingDone[x.status]++;
        });
      });
  }

  updateItems(e) {
    this.todoItems = e;
    this.todoDoingDone = { todo: 0, doing: 0, done: 0 };
    e.forEach(x => {
      this.todoDoingDone[x.status]++;
    });
  }

  ngOnInit(): void {
    this.getAllToDos();
  }
}
