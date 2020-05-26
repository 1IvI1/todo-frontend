import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IP, PORT } from 'src/app/exports/constants';

import { HttpClient } from '@angular/common/http';
import { ToDoItem } from 'src/app/interfaces/todo-interface';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() closeCreatePopUp: EventEmitter<boolean> = new EventEmitter();
  @Output() updateItems: EventEmitter<Object> = new EventEmitter();
  objectToSend: ToDoItem = {
    title: "",
    description: ""
  };

  constructor(private http: HttpClient) {}

  doClosePopUp(): void {
    console.log("trying to close create popup")
    this.closeCreatePopUp.emit(false);
  }

  updateData(): void {
    this.http.post(
      `${IP + PORT}/todo/create`,
      this.objectToSend
    ).subscribe(response => {
      this.updateItems.emit(response);
      this.doClosePopUp();
    })
  }

  ngOnInit(): void {
  }
}
