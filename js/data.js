
(function() {
  window.todo = window.todo || {};
  window.todo.todoData = todoData;
  window.todo.getTasksLeft = getTasksLeft;

  var numberOfTasksLeft = 0;
  var todoArray = [];

  function todoData(newTask) {
    numberOfTasksLeft++;

    var data = {
      text: newTask,
      time: Date.now()
    }
    todoArray.push(data);
  }

})();
