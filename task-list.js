class TaskList extends HTMLElement {
  constructor() {
    super();
    this.repo = new TaskRepository();
    this.repo.subscribe((tasks) => {
      this.renderTasks(tasks);
    });
  }

  renderTasks(tasks) {
    this.innerHTML = "";
    tasks.forEach((task) => {
      const entry = document.createElement("task-entry");
      entry.task = task;
      this.appendChild(entry);
    });
  }
}

window.customElements.define("task-list", TaskList);
