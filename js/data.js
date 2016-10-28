(function() {

document.querySelector('form').addEventListener('submit', function handleEnter(eventobj){
  eventobj.preventDefault();

  // eventobj.target.childNodes[1].value;
  console.log('hey');

  console.log(eventobj);

  var todo = document.createElement('li');

  todo.innerText = document.querySelector('.new-todo').value;

  todo.classList.add('new-item');
  document.querySelector('ul').appendChild(todo);
  console.log('addnewitem');

})


})();
