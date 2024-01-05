import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const initialData = {
  brand1: [
    { id: '1', content: 'Size 1' },
    { id: '2', content: 'Size 2' },
    { id: '3', content: 'Size 3' },
  ],
  brand2: [
    { id: '4', content: 'Size 4' },
    { id: '5',  content: 'Size 5' },
  ],
  brand3: [
    { id: '6', content: 'Size 6' },
    { id: '7', content: 'Size 7' },
  ],
  brand4: [
    { id: '8', content: 'Size 8' },
    { id: '9', content: 'Size 9' },
  ],
  brand5: [
    { id: '10', content: 'Size 10' },
    { id: '11', content: 'Size 11' },
    { id: '12', content: 'Size 12' },
    { id: '13', content: 'Size 13' },
  ],
};

const DT = () => {
  const [tasks, setTasks] = useState(initialData);

  const onDragEnd = (result) => {
      console.log('DragEnd ', result)
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceList = tasks[source.droppableId];
    const destinationList = tasks[destination.droppableId];

    const [removed] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: [...sourceList],
      [destination.droppableId]: [...destinationList],
    });
  };

  return (
    <div className="flex  h-full w-full">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tasks).map((columnId) => (
          <div key={columnId} className="flex-1 p-4 justify-between">
            <Droppable droppableId={columnId}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`bg-gray-200 p-2 ${
                    snapshot.isDraggingOver ? 'bg-gray-300' : ''
                  }`}
                >
                  {tasks[columnId].map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                      
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`px-10 my-2  py-2 rounded-full bg-[#97979778] text-white ${
                            snapshot.isDragging ? 'shadow-md' : ''
                          }`}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};

export default DT;
