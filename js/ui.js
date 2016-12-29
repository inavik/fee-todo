(function() {
  window.todo = window.todo || {};
  window.todo.todoApp = todoApp;

  /**
  * Creates a new task in the to do list
  * @param  {String} items new task
  */
  function todoApp(items) {
      var list = document.createElement('li');
      var article = document.createElement('article');
      var check = document.createElement('button');
      check.classList.add('check');
      article.appendChild(check);
      var par = document.createElement('p');
      par.innerText = items;
      article.appendChild(par);
      var del = document.createElement('button');
      del.classList.add('delete');
      del.innerText = 'X';
      article.appendChild(del);
      list.appendChild(article);

      document
        .querySelector('ul.items')
        .appendChild(list);
  }

  document
    .querySelector('form')
    .addEventListener('submit', function handleEnter(eventobj){
        eventobj.preventDefault();
        var input = document.querySelector('.new-todo');
        todoApp(input.value);
        window.todo.todoData(input.value);

        updateNumofTasksLeft();
    });

  document
    .querySelector('ul.items')
    .addEventListener('click', function completed (eventObj) {
        if(eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'check') {
          if(eventObj.target.parentNode.className === 'completed') {
            eventObj.target.parentNode.classList.remove('completed');
            window.todo.updateCounter(1);
          } else {
              eventObj.target.parentNode.classList.add('completed');
              window.todo.updateCounter();
          }
          updateNumofTasksLeft();
        } else if
        (eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'delete') {
          eventObj.target.parentNode.parentNode.remove();
          window.todo.updateCounter();
        }
        updateNumofTasksLeft();
    });

  function updateNumofTasksLeft() {
    document.querySelector('.incomplete-items').innerText = window.todo.totalCount();
  }
})();
