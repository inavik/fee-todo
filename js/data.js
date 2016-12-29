
(function() {
  window.todo = window.todo || {};
  window.todo.todoData = todoData;
  window.todo.updateCounter = updateCounter;
  window.todo.totalCount = totalCount;

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

  function updateCounter(number) {
    if(number === 1) {
      numberOfTasksLeft++;
    } else {
      numberOfTasksLeft--;
    }
  }
  function totalCount() {
    return numberOfTasksLeft;
  }
})();
