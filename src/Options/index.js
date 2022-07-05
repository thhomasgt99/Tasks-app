import React from 'react'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { useTodos } from '../App/useTodos'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { Edit } from '../TodoIcon/Edit'
import { EditPortal } from '../EditPortal'
import { EditForm } from '../EditForm'
import './Options.css'

function Options(props) {
	const {completeTodo} = useTodos()
	return (
		<div className='options' id={props.id}>
			<CompleteIcon 
				completed={props.completed}
				onComplete={() => completeTodo(props.text)}
			/>
			<DeleteIcon text={props.text}/>
			<Edit setOpenEdit={props.setOpenEdit}/>

      {!!props.openEdit && (
        <EditPortal>
          <EditForm
						text={props.text}
            setOpenEdit={props.setOpenEdit}
						editTodo={props.editTodo}
          />
        </EditPortal>
      )}
		</div>
	)
}

export default Options