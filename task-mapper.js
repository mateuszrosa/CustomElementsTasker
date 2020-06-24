class TaskMapper {
  getTask(form) {
    return {
      text: form.querySelector("input").value,
      date: form.querySelector("input[type=date]").value,
      completed: false,
      id: this.getId(),
    };
  }
  getId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
}
