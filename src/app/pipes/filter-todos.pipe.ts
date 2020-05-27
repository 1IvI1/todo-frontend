import { Pipe, PipeTransform } from '@angular/core';

import { ToDoItem } from 'src/app/interfaces/todo-interface';

@Pipe({ name: 'filterTodosByStatus' })
export class FilterTodos implements PipeTransform {
  transform(
    toDos: Array<ToDoItem>,
    filterType?: string,
    inputFilterValue?: string,
    inputFilterValueType?: string
  ): Array<ToDoItem> {
    let filteredTodos =
      filterType === 'none'
        ? toDos
        : toDos.filter(x => x.status === filterType);
    if (inputFilterValueType === 'none') {
      return filteredTodos.filter(
        x =>
          x.title.toLowerCase().includes(inputFilterValue.toLowerCase()) ||
          x.description.toLowerCase().includes(inputFilterValue.toLowerCase())
      );
    } else if (inputFilterValueType === 'title') {
      return filteredTodos.filter(x =>
        x.title.toLowerCase().includes(inputFilterValue.toLowerCase())
      );
    } else if (inputFilterValueType === 'description') {
      return filteredTodos.filter(x =>
        x.description.toLowerCase().includes(inputFilterValue.toLowerCase())
      );
    }
  }
}
