import mockData from '../../mockData'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { Card } from "../card/Card"
import { useState } from "react"
import './kanban.scss'

export function Kanban() {
  const [data, setData] = useState(mockData)

  const onDragEnd = (result) => {
    if (!result.destination) return
    const {source, destination} = result
    if (source.droppableId !== destination.droppableId)
      {
        const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
        const destinantionColIndex = data.findIndex(e => e.id === destination.droppableId)

        const sourceCol = data[sourceColIndex]
        const destinationCol = data[sourceColIndex]
        const sourceTask = [...sourceCol.tasks]
        const destinationTask = [...destinationCol.tasks]

        const [removed] = sourceTask.splice(source.index, 1)
        destinationTask.splice(destination.index, 0, removed)

        data[sourceColIndex].task = sourceTask
        data[destinantionColIndex].task = destinationTask

        setData(data)
      }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='kanban'>
        {data.map((section) =>(
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) =>
              (
                <div {...provided.droppableProps} className='kanban__section'
                ref={provided.innerRef}>
                  <div className='kanban__section__title'>
                    {section.title}
                  </div>
                  <div className='kanban__section__content'>
                    {section.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                          style={
                            {...provided.draggableProps.style, opacity: snapshot.isDragging ? '0.5' : '1'}
                          }>
                            <Card>
                              {task.title}
                            </Card>

                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
              )
            }
          </Droppable>
        ))}
      </div>

    </DragDropContext>
  )
}
