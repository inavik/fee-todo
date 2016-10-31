
(function() {

var numberOfTasks = 0;

  function todo(items) {

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
      .querySelector('ul')
      .appendChild(list);

    }

document
  .querySelector('form')
  .addEventListener('submit', function handleEnter(eventobj){
  eventobj.preventDefault();
  var todoList = document
                  .querySelector('.new-todo')
                  .value;

  // todo(todoList);

  var anArray = [];

  var input = document.querySelector('.new-todo');
    todo(input.value);
    // console.log('did this work');

  var data = {
    text: input.value,
    time: Date.now()
  }

  anArray.push(data);
  console.log('arraypush');
  console.log(anArray);

  numberOfTasks++;


})

document.querySelector('ul').addEventListener('click', function completed (eventObj) {

if(eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'check') {
  eventObj.target.parentNode.classList.toggle('completed');
} else if
  (eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'delete') {
   eventObj.target.parentNode.parentNode.remove();
}


})

})();
