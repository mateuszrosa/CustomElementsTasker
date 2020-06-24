class TaskRepository {
  constructor() {
    if (TaskRepository.instance instanceof TaskRepository) {
      return TaskRepository.instance;
    }

    this.tasks = [];
    this.subscribers = [];
    this.name = name;
    TaskRepository.instance = this;
  }

  getAll() {
    return this.tasks;
  }

  add(task) {
    this.tasks.push(task);
    this.onChange();
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    this.onChange();
  }

  updateCompleted(taskId, completed) {
    const task = this.tasks.find((t) => t.id === taskId);
    task.completed = !completed;
    this.onChange();
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  onChange() {
    this.subscribers.forEach((s) => {
      s(this.tasks);
    });
  }
}
