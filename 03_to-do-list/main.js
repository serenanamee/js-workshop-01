document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#addBtn').addEventListener('click', function () {
    let input = document.getElementById('input').value
    let listAdd = document.getElementById('list')
    let liAdd = document.createElement('li')
    let spanAdd = document.createElement('span')

    liAdd.textContent = input;
    listAdd.appendChild(liAdd);
    spanAdd.classList.add('close');
    liAdd.appendChild(spanAdd);
    spanAdd.textContent = 'x';
    liAdd.addEventListener('click', function () {
      liAdd.classList.toggle("checked");
    });
  })
  let liColor = document.querySelectorAll('li');
  liColor.forEach((li) => {
    li.addEventListener('click', function () {
      li.classList.toggle("checked");
    });
  });

})



