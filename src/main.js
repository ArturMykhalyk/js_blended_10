/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
e
*/
import {
  initialTaskLocaleStorage,
  getTasksLocaleStorage,
} from './js/local-storage-api';
import { handleAddTask, handleDeleteTask } from './js/tasks';
import { refs } from './js/refs';
import { renderMarkupTasks } from './js/render-tasks';
import { handleChangeTheme } from './js/theme-switcher';
import { startTheme } from './js/theme-switcher';
initialTaskLocaleStorage();
renderMarkupTasks(getTasksLocaleStorage());
startTheme();

refs.taskFormEl.addEventListener('submit', handleAddTask);
refs.taskListEl.addEventListener('click', handleDeleteTask);
refs.changeTheme.addEventListener('click', handleChangeTheme);
