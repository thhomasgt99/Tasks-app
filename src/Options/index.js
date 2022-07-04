import React from 'react'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { useTodos } from '../App/useTodos'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { Edit } from '../TodoIcon/Edit'
import './Options.css'

function Options(props) {
	const {completeTodo,completedTodos} = useTodos()
	return (
		<div className='options' id={props.id}>
			<CompleteIcon 
				completed={props.completed}
				onComplete={() => completeTodo(props.text)}
			/>
			<DeleteIcon text={props.text}/>
			<Edit />
		</div>
	)
}

export default Options