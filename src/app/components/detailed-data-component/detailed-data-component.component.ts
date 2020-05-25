import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopUpClosing, ToDoItem } from 'src/app/interfaces/todo-interface';

@Component({
  selector: 'app-detailed-data-component',
  templateUrl: './detailed-data-component.component.html',
  styleUrls: ['./detailed-data-component.component.scss']
})
export class DetailedDataComponentComponent implements OnInit {
  @Output() closeDetailedData: EventEmitter<PopUpClosing> = new EventEmitter();
  @Input() todoDetails: ToDoItem;
  closePopUp(): void {
    this.closeDetailedData.emit({popUp: "DETAILS",status: false});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
