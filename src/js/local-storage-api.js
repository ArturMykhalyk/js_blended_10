export function saveTaskLocaleStorage(task) {
  const tasks = getTasksLocaleStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function initialTaskLocaleStorage() {
  const tasks = getTasksLocaleStorage() ?? [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasksLocaleStorage() {
  return JSON.parse(localStorage.getItem('tasks'));
}
export function deleteTaskLocaleStorage(id) {
  const tasks = getTasksLocaleStorage();
  localStorage.setItem(
    'tasks',
    JSON.stringify(tasks.filter(task => task.id !== id))
  );
}
