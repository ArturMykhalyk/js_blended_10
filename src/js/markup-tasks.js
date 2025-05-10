export function createMarkupTask({ id, name, description }) {
  return `  <li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${name}</h3>
      <p>${description}</p>
  </li>`;
}
