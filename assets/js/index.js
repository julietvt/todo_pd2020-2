const myRegExp = /\w/;
const inputTaskElem = document.querySelector('input[name="task"]');
const createTaskButtonElem = document.getElementById('createTaskButton');
const deleteTaskButtonElem = document.getElementById('deleteTaskButton');
const tasksListElem = document.getElementById('tasksList');
let isValid = false;
inputTaskElem.oninput = onInputHandler;
createTaskButtonElem.addEventListener('click', onCreateTask);
/*
deleteTaskButtonElem.addEventListener('click',onDeleteTask);

function onDeleteTask(){

}
*/
function onCreateTask(event) {
  addTaskInput(inputTaskElem.value);
  inputTaskElem.value = '';
}

function addTaskInput(value) {
  if (value) {
    const task = document.createElement('li');
    task.classList.add('taskElem');
    task.textContent = inputTaskElem.value;
    task.append(addTimeTask());
    tasksListElem.append(task);
  }
  return;
}

function onInputHandler(event) {
  isValid = myRegExp.test(this.value);
  if (isValid) {
    this.classList.remove('invalid_style');
    this.classList.add('valid_style');
  } else {
    this.classList.add('invalid_style');
    this.classList.remove('valid_style');
  }
}

function addTimeTask() {
  const timeElement = document.createElement('div');
  timeElement.classList.add('timeElement');
  const time = new Date();
  timeElement.textContent =
    time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
  return timeElement;
}
