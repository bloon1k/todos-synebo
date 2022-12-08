import React from 'react'
import { TodosListItem, useTodosListControls } from '../../../components'
import { v4 as uuid } from 'uuid'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const CompletedTodosList = () => {
    const { todosList, handleOnDragEnd } = useTodosListControls()

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={'todos'}>
                {(provided) => (
                    <main
                        className="todos-list"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {todosList
                            .filter((todo) => todo.isCompleted)
                            .map((todo) => (
                                <Draggable
                                    key={uuid()}
                                    draggableId={todo.id.toString()}
                                    index={todosList.indexOf(todo)}
                                >
                                    {(provided) => (
                                        <TodosListItem
                                            item={todo}
                                            provided={provided}
                                        />
                                    )}
                                </Draggable>
                            ))}
                        {provided.placeholder}
                    </main>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export { CompletedTodosList }
