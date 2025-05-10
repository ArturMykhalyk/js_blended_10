export function saveTaskLocaleStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function initialTaskLocaleStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
