import { Pipe, PipeTransform } from '@angular/core';
import {TodoItem} from "./todo-item";

@Pipe({
  name: 'todoItem'
})
export class TodoItemPipe implements PipeTransform {

  transform(value: TodoItem): unknown {
    return 'XXX';
  }

}
