import React from 'react'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { Edit } from '../TodoIcon/Edit'
import './Options.css'

function Options(props) {
		console.log('desde Options: '+ props.text)
	return (
		<div className='options' id={props.id}>
			<CompleteIcon />
			<DeleteIcon text={props.text}/>
			<Edit />
		</div>
	)
}

export default Options