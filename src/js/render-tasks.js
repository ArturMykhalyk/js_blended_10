import { createMarkupTask } from './markup-tasks';
import { refs } from './refs';

export function renderMarkupTask(markup) {
  refs.taskListEl.insertAdjacentHTML('beforeend', createMarkupTask(markup));
}

export function renderMarkupTasks(markups) {
  refs.taskListEl.insertAdjacentHTML(
    'beforeend',
    markups.map(markup => createMarkupTask(markup)).join(' ')
  );
}
