import React from 'react'
import './CreateTodo-styles.scss'
// model
import { useCreateTodoControls } from '../model'

const CreateTodo = () => {
    const { handleEnter, isChecked, handleCheck, todoInputRef } =
        useCreateTodoControls()

    return (
        <section className={'create-todo'}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheck}
                />
                <span className="checkbox__checkmark"></span>
            </label>
            <input
                type="text"
                className={'create-todo__input'}
                placeholder={'Create a new todo...'}
                ref={todoInputRef}
                onKeyDown={handleEnter}
            />
        </section>
    )
}

export { CreateTodo }
