function initAllTasks(parent, tasksManager) {
  const tasks = tasksManager.getTasks();
  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <button class="btn btn-danger">Delete</button>
    `;
    taskElement.querySelector('button').addEventListener('click', () => {
      tasksManager.deleteTask(task.id);
      taskElement.remove();
    });
    parent.appendChild(taskElement);
  });
}

export { initAllTasks };