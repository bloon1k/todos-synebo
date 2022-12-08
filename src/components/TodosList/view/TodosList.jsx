import React from 'react'
import './TodosList-style.scss'
// children
import { TodosListItem } from '../../TodosListItem'
// model
import { useTodosListControls } from '../model'
import { v4 as uuid } from 'uuid'
// dnd
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TodosList = () => {
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
                        {todosList.map((todo, index) => {
                            return (
                                <Draggable
                                    key={uuid()}
                                    draggableId={todo.id.toString()}
                                    index={index}
                                >
                                    {(provided) => (
                                        <TodosListItem
                                            item={todo}
                                            provided={provided}
                                        />
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </main>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export { TodosList }
