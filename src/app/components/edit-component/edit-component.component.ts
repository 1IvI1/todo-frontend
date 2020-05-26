import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IP, PORT } from 'src/app/exports/constants';
import { PopUpClosing, ToDoItem } from 'src/app/interfaces/todo-interface';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {
  @Output() closeDetailedData: EventEmitter<PopUpClosing> = new EventEmitter();
  @Output() updateItems: EventEmitter<Object> = new EventEmitter()
  @Input() todoDetails: ToDoItem;
  objectToSend: ToDoItem;

  constructor(private http: HttpClient) {}

  closePopUp(): void {
    this.closeDetailedData.emit({ popUp: 'EDIT', status: false });
  }

  updateData(): void {
    this.http.put(
      `${IP + PORT}/todo/update/${this.todoDetails.id}`,
      this.objectToSend
    ).subscribe(response => {
      this.updateItems.emit(response);
      this.closePopUp();
    })
  }

  ngOnInit(): void {
    this.objectToSend = this.todoDetails;
  }
}
