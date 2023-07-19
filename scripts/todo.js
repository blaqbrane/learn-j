const text_input = document.getElementById('text_input')
const date_input = document.getElementById('date_input')
const items = document.getElementById('items')
let todoArray = []



const renderTodo = () =>{
  let todoHtml = ''
  for(let i = 0; i <= todoArray.length -1; i++){
    const todo = todoArray[i]
    const html = `<p>${todo.text_val} - ${todo.date_val} <button onclick="todoArray.splice(${i},1)
    renderTodo()
    "> Delete</button></p>`
    todoHtml += html
    console.log(todoHtml)
    items.innerHTML = todoHtml
    
  }
}
renderTodo()

const handleClick = () => {

  const text_val = text_input.value
  const date_val = date_input.value
  
  todoArray.push({text_val,date_val})
  console.log(todoArray)
 
  text_input.value = '';
   renderTodo()
}
 
