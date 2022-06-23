import React from 'react'

const List = ({todos, setTodos}) => {

	const deleteHandler = (todo) => {
		setTodos(todos.filter((e) => e.id !== todo.id))
	}
	const deleteAll = () => {
		setTodos(todos.filter((e) => e.completed !== true))
	}
	const completeHandler = (todo) => {
		setTodos(todos.map((item) => {
			if(item.id === todo.id) {
				return {
					...item, completed: !item.completed
				}
			} else {
				return item;
			}
		}))
	}
  return (
	<div>
		{
			todos.map((item) => {
				return (
				<div key={item.id}>
					<div className={`list-item ${item.completed ? "completed" : "notCompleted"}`}>{item.text}
					<button className='btn' id="complete" onClick={() => completeHandler(item)}>{item.completed ? "completed" : "notCompleted"}</button>
					<button className='btn' id="delete" onClick={() => deleteHandler(item)}>Delete</button></div>
					
					</div>
			)})
		}
		<button id="deleteAll" className='btn' onClick={() => deleteAll(todos)}>Clear Completed</button>
	</div>
  )
}

export default List