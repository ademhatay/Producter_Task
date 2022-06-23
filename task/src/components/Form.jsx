import React from 'react'
import { useState } from 'react'
import List from './List';

const Form = () => {

	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);


	const inputHandler = (e) => {
		setInputText(e.target.value);
	}
	const clickHandler = (e) => {
		e.preventDefault();
		if (!inputText) {
			return false;
		} else {
			setTodos([
				...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
			])
			setInputText('');
		}
	}
	return <>
		<form>
			<label htmlFor="taskInput">write a task</label>
			<input onChange={inputHandler} id='taskInput' type='text' autoComplete='off' value={inputText} />
			<button id="submitButton" onClick={clickHandler}>Save</button>
		</form>
		<List todos={todos} setTodos={setTodos}/>
	</>
}

export default Form