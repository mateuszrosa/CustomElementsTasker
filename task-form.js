class TaskForm extends HTMLElement {
  constructor() {
    super();
    this.repo = new TaskRepository();
    this.mapper = new TaskMapper();
  }
  connectedCallback() {
    this.innerHTML = `<form>
    <input />
    <input type="date" />
    <button>Dodaj</button>
    </form>`;

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => this.onSubmit(e, form));
  }

  onSubmit(e, form) {
    e.preventDefault();
    const task = this.mapper.getTask(form);
    this.repo.add(task);

    form.reset();
  }
}
window.customElements.define("task-form", TaskForm);
