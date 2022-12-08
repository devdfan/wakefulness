import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { IonCol } from '@ionic/react';
import cn from 'classnames';
import { DraggableItem } from '../DraggableItem/DraggableItem';

interface Props {
  column: any; //ObjectList
  id: string;
}

export const DroppableItems: React.FC<Props> = ({ column, id }) => (
  <IonCol size="4">
    <h1 className="droppable__title">{column?.name}</h1>
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={cn('droppable__box', { 'is-active': snapshot.isDraggingOver })}
        >
          {column?.items?.map((item, index) => {
            return <DraggableItem key={item.id} item={item} index={index} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </IonCol>
);
