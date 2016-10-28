(function() {


  function todo(items) {

  var list = document.createElement('li');

  // todo.innerText = document.querySelector('.new-todo').value;

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

  document.querySelector('ul').appendChild(list);

}

document.querySelector('form').addEventListener('submit', function handleEnter(eventobj){
  eventobj.preventDefault();
  var todoList = document.querySelector('.new-todo').value;

  todo(todoList);




})


})();
