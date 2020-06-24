class TaskEntry extends HTMLElement {
  constructor() {
    super();
    this.repo = new TaskRepository();
    this._task = null;
    console.log("object");
  }

  set task(task) {
    this._task = task;
  }

  connectedCallback() {
    this.innerHTML = `<div>
                        <label>
                          <input type="checkbox" />
                          <span>${this._task.date}</span>
                          <p>${this._task.text}</p>
                        </label>
                        <button>Usuń</button>
                      </div>`;
  }

  onRemove() {
    this.repo.remove(this._task.id);
  }
}

window.customElements.define("task-entry", TaskEntry);
