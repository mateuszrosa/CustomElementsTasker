class TaskList extends HTMLElement {
  constructor() {
    super();
    this.repo = new TaskRepository();
    this.repo.subscribe((tasks) => {
      this.renderTasks(tasks);
    });
  }

  renderTasks(tasks) {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.innerHTML = "";
    tasks.forEach((task) => {
      const entry = document.createElement("task-entry");
      entry.task = task;
      shadowRoot.appendChild(entry);
    });
  }
}

window.customElements.define("task-list", TaskList);
