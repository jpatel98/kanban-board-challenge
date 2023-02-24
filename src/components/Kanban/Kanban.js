import Card from "../Card/Card";
import "./Kanban.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { useState } from "react";

const Kanban = () => {
    const [data, setData] = useState(mockData)
    const onDragEnd = result => {
        console.log(result);
    }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban">
            {
                data.map(section => (
                    <Droppable 
                        key={section.id}
                        droppableId={section.id}
                    >
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                className="kanban__section"
                                ref={provided.innerRef}
                            >
                                <div className="kanban__section__title">
                                    {section.title}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))
            }
        </div>
    </DragDropContext>
  );
};

export default Kanban;
