// generate base structure
const mainWrapper = document.createElement('main')
const form = document.createElement('form')
const inputField = document.createElement('input')
const submitButton = document.createElement('input')
const todosList = document.createElement('ul')

//set html attributes for various elements
form.setAttribute('class', 'todo-form')

inputField.setAttribute('type', 'text')
inputField.setAttribute('id', 'add-todo')
inputField.setAttribute('class', 'input')
inputField.setAttribute('placeholder', 'Add todo... e.g. Go for a walk')

submitButton.setAttribute('type', 'submit')
submitButton.setAttribute('value', 'Add todo')

// append element to body
document.body.appendChild(mainWrapper)

mainWrapper.appendChild(form)
mainWrapper.appendChild(todosList)

form.appendChild(inputField)
form.appendChild(submitButton)

// function to add todo into list
const addTodoToList = (event) => {
  event.preventDefault()

  // generate new list element
  const listElement = document.createElement('li')

  const todoTitle = document.createElement('span')
  const checkBoxlabel = document.createElement('label')
  const markAsCompleteCheckBox = document.createElement('input')
  const deleteButton = document.createElement('button')

  todoTitle.innerText = inputField.value

  // add html attributes to todo element
  markAsCompleteCheckBox.setAttribute('type', 'checkbox')
  markAsCompleteCheckBox.setAttribute('id', `checkBox-${inputField.value}`)

  checkBoxlabel.htmlFor = markAsCompleteCheckBox.id
  checkBoxlabel.appendChild(document.createTextNode('Mark as complete'))

  deleteButton.innerText = 'Delete'

  // add elements to todo list
  listElement.appendChild(todoTitle)
  listElement.appendChild(markAsCompleteCheckBox)
  listElement.appendChild(checkBoxlabel)
  listElement.appendChild(deleteButton)

  todosList.appendChild(listElement)

  // button event listeners
  markAsCompleteCheckBox.addEventListener('change', () => {
    if (markAsCompleteCheckBox.checked) {
      markAsCompleteCheckBox.remove()
      checkBoxlabel.remove()

      todoTitle.style.setProperty('text-decoration', 'line-through')
    }
  })

  deleteButton.addEventListener('click', () => {
    todosList.removeChild(listElement)
  })

  // clear input field
  inputField.value = ''
}

// add custom submit listener to form
form.addEventListener('submit', addTodoToList)
