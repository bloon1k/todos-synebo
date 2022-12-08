import React from 'react'
import './TodosList-style.scss'
// children
import { TodosListItem } from '../../TodosListItem'
// model
import { useTodosListControls } from '../model'
import { v4 as uuid } from 'uuid'

const TodosList = () => {
    const { todosList } = useTodosListControls()

    return (
        <main className={'todos-list'}>
            {todosList.map((todo) => (
                <TodosListItem item={todo} key={uuid()} />
            ))}
        </main>
    )
}

export { TodosList }
