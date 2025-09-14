import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo';
// import { NoteComponent } from './note/note';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'todo', component: TodoComponent },
  // { path: 'notes', component: NoteComponent },
];
