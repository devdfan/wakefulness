import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { IonCol, IonInput, IonRow } from '@ionic/react';
import cn from 'classnames';
import { DraggableItem } from './DraggableItem';

interface Props {
  column: any; //ObjectList
  id: string;
}

export const DroppableItems: React.FC<Props> = ({ column, id }) => (
  <IonCol size="6">
    <IonRow className="ion-align-items-end">
      <IonCol>
        <h1 className="droppable__title">{column?.name}</h1>
      </IonCol>
      <IonCol>
        <IonInput placeholder="Search..." type="search" />
      </IonCol>
    </IonRow>

    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={cn('h-full', { 'bg-white dark:bg-gray-900': snapshot.isDraggingOver })}
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
