import { useSelector } from 'react-redux'

const useTodosListControls = () => {
    const todosList = useSelector((state) => state.todos.todosList)

    return { todosList }
}

export { useTodosListControls }
