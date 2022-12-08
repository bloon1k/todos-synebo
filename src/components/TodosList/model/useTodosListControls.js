import { useDispatch, useSelector } from 'react-redux'
import { setTodosList } from '../../../redux'

const useTodosListControls = () => {
    const todosList = useSelector((state) => state.todos.todosList)
    const dispatch = useDispatch()

    function handleOnDragEnd(result) {
        if (!result.destination) return
        const items = Array.from(todosList)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        dispatch(setTodosList(items))
    }

    return { todosList, handleOnDragEnd }
}

export { useTodosListControls }
