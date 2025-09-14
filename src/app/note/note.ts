import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './note.html',
  styleUrl: './note.css',
})
export class NoteComponent {
  notes: string[] = [];
  newNote: string = '';

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote);
      this.newNote = '';
    }
  }

  removeNote(index: number) {
    this.notes.splice(index, 1);
  }
}
