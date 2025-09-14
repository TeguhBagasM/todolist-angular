import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
})
export class TodoComponent {
  todos: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
