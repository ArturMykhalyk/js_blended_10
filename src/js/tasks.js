import { saveTaskLocaleStorage } from './local-storage-api';
import { nanoid } from 'nanoid';
export function handleAddTask(event) {
  event.preventDefault();

  const task = {
    id: nanoid(),
    name: event.target.elements.taskName.value.trim(),
    description: event.target.elements.taskDescription.value.trim(),
  };

  saveTaskLocaleStorage(task);
  console.log(task);

  event.target.reset();
}
