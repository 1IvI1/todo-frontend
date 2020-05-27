import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FilterInputType } from 'src/app/interfaces/todo-interface';

@Component({
  selector: 'app-input-filter-value-type-selector',
  templateUrl: './input-filter-value-type-selector.component.html',
  styleUrls: ['./input-filter-value-type-selector.component.scss']
})

export class InputFilterValueTypeSelectorComponent {
  @Output() changeInputFilterValueType: EventEmitter<FilterInputType> = new EventEmitter();

  constructor() { }

  handleFilterValueTypeChange(value: string) {
    this.changeInputFilterValueType.emit({value: value, open: false});
  }
}
