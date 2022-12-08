import React from 'react'
import { TodosListItem, useTodosListControls } from '../../../components'
import { v4 as uuid } from 'uuid'

const ActiveTodosList = () => {
    const { todosList } = useTodosListControls()

    return (
        <section className={'active-todos-list'}>
            {todosList
                .filter((todo) => !todo.isCompleted)
                .map((todo) => (
                    <TodosListItem item={todo} key={uuid()} />
                ))}
        </section>
    )
}

export { ActiveTodosList }
