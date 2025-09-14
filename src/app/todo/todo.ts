import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
})
export class TodoComponent {
  todos: Todo[] = [];
  newTitle: string = '';
  newDescription: string = '';

  addTodo() {
    if (this.newTitle.trim()) {
      this.todos.push({
        title: this.newTitle,
        description: this.newDescription,
      });

      this.newTitle = '';
      this.newDescription = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
