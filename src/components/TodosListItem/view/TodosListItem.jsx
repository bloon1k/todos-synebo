import React from 'react'
import './TodosListItem-styles.scss'
// model
import { useTodosListItemControls } from '../model/'
// assets
import cross from '../../../images/icon-cross.svg'

const TodosListItem = ({ item }) => {
    const { isChecked, handleCheck, handleDeleteTodo } =
        useTodosListItemControls(item)

    return (
        <div className={'todos-list-item'}>
            <div className="todos-list-item__clickable">
                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheck}
                    />
                    <span className="checkbox__checkmark"></span>
                </label>
                <p className={isChecked && 'crossed'} onClick={handleCheck}>
                    {item.text}
                </p>
            </div>
            <button
                className={'button hidden'}
                onClick={() => handleDeleteTodo(item)}
            >
                <img src={cross} alt="delete cross" />
            </button>
        </div>
    )
}

export { TodosListItem }
