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
    });

  document
    .querySelector('.items')
    .addEventListener('click', function completed (eventObj) {
        if(eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'check') {
          if(eventObj.target.parentNode.className === 'completed') {
            eventObj.target.parentNode.classList.remove('completed');
          } else {
              eventObj.target.parentNode.classList.add('completed');
          }
        } else if
        (eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'delete') {
          eventObj.target.parentNode.parentNode.remove();
        }
    });

})();
