// redux
import { useDispatch, useSelector } from 'react-redux'
import { setTodosList } from '../../../redux'

const useFooterControls = () => {
    const dispatch = useDispatch()
    const todosList = useSelector((state) => state.todos.todosList)

    function handleClearCompleted() {
        const newTodosList = todosList.filter((todo) => !todo.isCompleted)
        dispatch(setTodosList(newTodosList))
    }

    const linkStyle = ({ isActive }) => {
        return {
            color: isActive && 'hsl(220, 98%, 61%)',
        }
    }

    return { todosList, handleClearCompleted, linkStyle }
}

export { useFooterControls }
