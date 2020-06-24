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
                          <input type="checkbox" />
                          <span>${this._task.date}</span>
                          <p>${this._task.text}</p>
                        </label>
                        <button class="remove-btn">Usuń</button>
                      </div>`;
    this.querySelector(".remove-btn").addEventListener("click", () =>
      this.onRemove()
    );
  }

  onRemove() {
    this.repo.remove(this._task.id);
  }
}

window.customElements.define("task-entry", TaskEntry);
