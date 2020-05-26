import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IP, PORT } from 'src/app/exports/constants';
import { PopUpClosing, ToDoItem } from 'src/app/interfaces/todo-interface';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-detailed-data-component',
  templateUrl: './detailed-data-component.component.html',
  styleUrls: ['./detailed-data-component.component.scss']
})
export class DetailedDataComponentComponent implements OnInit {
  @Output() closeDetailedData: EventEmitter<PopUpClosing> = new EventEmitter();
  @Output() updateItems: EventEmitter<Object> = new EventEmitter();
  @Input() todoDetails: ToDoItem;

  constructor(private http: HttpClient) {}

  closePopUp(): void {
    this.closeDetailedData.emit({popUp: "DETAILS",status: false});
  }

  updateStatus(status: string) {
    let toDo = this.todoDetails;
    toDo.status = status;
    this.http.put(`${IP + PORT}/todo/update/${this.todoDetails.id}/status`,toDo)
      .subscribe(response => {
        this.updateItems.emit(response)
        this.closePopUp()
      })
  }

  ngOnInit(): void {
  }

}
