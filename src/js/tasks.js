import {
  saveTaskLocaleStorage,
  deleteTaskLocaleStorage,
} from './local-storage-api';
import { nanoid } from 'nanoid';
import { renderMarkupTask } from './render-tasks';

export function handleAddTask(event) {
  event.preventDefault();

  const task = {
    id: nanoid(),
    name: event.target.elements.taskName.value.trim(),
    description: event.target.elements.taskDescription.value.trim(),
  };

  saveTaskLocaleStorage(task);
  renderMarkupTask(task);

  event.target.reset();
}

export function handleDeleteTask(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.target.parentElement.remove();
  const deleteTaskId = event.target.parentElement.dataset.id;
  deleteTaskLocaleStorage(deleteTaskId);
}
