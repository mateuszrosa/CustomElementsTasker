class TaskEntry extends HTMLElement {
  constructor() {
    super();
    this.repo = new TaskRepository();
    this._task = null;
  }

  set task(task) {
    this._task = task;
  }

  connectedCallback() {
    this.innerHTML = `<div>
                        <label>
                          <input type="checkbox" ${
                            this._task.completed ? "checked" : null
                          }/>
                          <span>${this._task.date}</span>
                          <p>${this._task.text}</p>
                        </label>
                        <button class="remove-btn">Usuń</button>
                      </div>`;
    this.querySelector(".remove-btn").addEventListener("click", () =>
      this.onRemove()
    );
    this.querySelector('input[type="checkbox"]').addEventListener("click", () =>
      this.onChange()
    );
  }

  onRemove() {
    this.repo.remove(this._task.id);
  }

  onChange() {
    this.repo.updateCompleted(this._task.id, this._task.completed);
  }
}

window.customElements.define("task-entry", TaskEntry);
