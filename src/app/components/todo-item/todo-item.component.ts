import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FilterInputType,
  ToDoItem,
  ToDoItemSelect,
  ToDoItemSwipe
} from 'src/app/interfaces/todo-interface';
import { IP, PORT } from 'src/app/exports/constants';
import {
  IconDefinition,
  faExchangeAlt,
  faPen,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'todo-items',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class ToDoItemComponent {
  @Input() items: Array<ToDoItem>;
  @Output() updateItems: EventEmitter<Object> = new EventEmitter();
  @Input() filterType: string;
  icon: IconDefinition = faExchangeAlt;
  selectedToDoItem: ToDoItem;
  faPen: IconDefinition = faPen;
  faTimesCircle: IconDefinition = faTimesCircle;
  todoSwipe: ToDoItemSwipe = {
    start: 0,
    isOpened: false
  };
  openDetailedPopUp: boolean = false;
  openEditPopUp: boolean = false;
  todoItemSelection: ToDoItemSelect = {
    todoItemSelected: false,
    index: -1
  };
  inputFilterType: string = 'Filter by title or description';
  inputFilterValue: string = '';
  inputFilterValueType: string = 'none';
  openInputFilterValueTypeSelector: boolean = false;

  constructor(private http: HttpClient) {}

  handleInputFilterValueType(e: FilterInputType): void {
    this.inputFilterValueType = e.value;
    this.openInputFilterValueTypeSelector = e.open;
    if (e.value === 'title') this.inputFilterType = 'Filter by title';
    else if (e.value === 'description')
      this.inputFilterType = 'Filter by description';
    else this.inputFilterType = 'Filter by title or description';
  }

  setOpenInputFilterValueTypeSelector() {
    this.openInputFilterValueTypeSelector = !this.openInputFilterValueTypeSelector;
  }

  handleStatusChange(e) {
    this.updateItems.emit(e);
  }

  closePopUp(e) {
    if (e.popUp === 'DETAILS') {
      this.openDetailedPopUp = e.status;
    } else if (e.popUp === 'EDIT') {
      this.openEditPopUp = e.status;
    }
  }

  deleteToDo(id) {
    let itemToDelete: ToDoItem = this.items.filter(x => (x.id = id))[0];
    this.http
      .delete(`${IP + PORT}/todo/delete/${itemToDelete.id}`)
      .subscribe(response => {
        this.updateItems.emit(response);
        this.todoItemSelection.todoItemSelected = false;
        this.todoItemSelection.index = -1;
      });
  }

  handleToDoEdit(toDo) {
    this.updateItems.emit(toDo);
    this.todoItemSelection.todoItemSelected = false;
    this.todoItemSelection.index = -1;
  }

  handleTodoItemClick(itemId) {
    console.log(itemId);
    this.openDetailedPopUp = true;
    this.selectedToDoItem = this.items.filter(x => x.id === itemId)[0];
  }

  openEditComponent(itemId) {
    console.log(itemId);
    this.openEditPopUp = true;
    this.selectedToDoItem = this.items.filter(x => x.id === itemId)[0];
  }

  closeDetailedDataPopUp(): void {
    this.openDetailedPopUp = false;
  }

  handleTouchStart(e): void {
    this.todoSwipe.start = e.touches[0].clientX;
  }

  handleTouchEnd(e, i): void {
    if (this.todoSwipe.start - e.changedTouches[0].clientX > 50) {
      this.todoItemSelection.todoItemSelected = true;
      this.todoSwipe.isOpened = true;
      this.todoItemSelection.index = i;
    } else {
      this.todoItemSelection.todoItemSelected = false;
      this.todoSwipe.isOpened = false;
    }
  }
}
