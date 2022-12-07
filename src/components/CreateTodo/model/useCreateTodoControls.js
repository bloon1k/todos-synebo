import { useRef, useState } from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setTodosList } from '../../../redux'

const useCreateTodoControls = () => {
    const dispatch = useDispatch()
    const todosList = useSelector((state) => state.todos.todosList)

    const [isChecked, setIsChecked] = useState(false)
    const todoInputRef = useRef(null)

    function handleEnter(event) {
        if (event.key === 'Enter') {
            const newTodo = {
                isCompleted: isChecked,
                text: todoInputRef.current.value,
            }
            dispatch(setTodosList([...todosList, newTodo]))
            todoInputRef.current.value = ''
            setIsChecked(false)
        }
    }

    function handleCheck() {
        setIsChecked((prev) => !prev)
    }

    return { handleEnter, isChecked, handleCheck, todoInputRef }
}

export { useCreateTodoControls }
