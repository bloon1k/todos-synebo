import { useState } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setTodosList } from '../../../redux'

const useTodosListItemControls = (item) => {
    const dispatch = useDispatch()
    const currentTodosList = useSelector((state) => state.todos.todosList)

    const [isChecked, setIsChecked] = useState(item.isCompleted)

    function handleCheck() {
        setIsChecked((prev) => !prev)
        const newTodosList = currentTodosList.map((todo) => {
            if (todo !== item) {
                return todo
            } else {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
        })
        dispatch(setTodosList(newTodosList))
    }

    function handleDeleteTodo(item) {
        const newTodosList = currentTodosList.filter((todo) => todo !== item)
        dispatch(setTodosList(newTodosList))
    }

    return { handleCheck, isChecked, handleDeleteTodo }
}

export { useTodosListItemControls }
