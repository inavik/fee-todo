(function() {

  document.querySelector('ul').addEventListener('click', function completed (eventObj) {

  if(eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'check') {
    eventObj.target.parentNode.classList.toggle('completed');
  } else if
    (eventObj.target.tagName === 'BUTTON' && eventObj.target.className === 'delete') {
     eventObj.target.parentNode.parentNode.remove();
  }

  })


})();
