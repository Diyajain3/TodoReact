const todos=[
  {id:1, text:"Learning React",done:false},
  {id:2, text:"learning Todo", done:false}
]


export function getTodo()
{
  return [...todos];
}
export function addTodo(newTodo)
{
  todos.push(newTodo);
}

export function deleteTodo(id) {
  todos = todos.filter(function(todo) {
    return todo.id !== id;
  });
}

