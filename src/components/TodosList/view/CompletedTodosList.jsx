import React from 'react'
import { TodosListItem, useTodosListControls } from '../../../components'
import { v4 as uuid } from 'uuid'

const CompletedTodosList = () => {
    const { todosList } = useTodosListControls()

    return (
        <main className={'completed-todos-list'}>
            {todosList
                .filter((todo) => todo.isCompleted)
                .map((todo) => (
                    <TodosListItem item={todo} key={uuid()} />
                ))}
        </main>
    )
}

export { CompletedTodosList }
