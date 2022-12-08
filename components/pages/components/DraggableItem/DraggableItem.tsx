import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';

interface Props {
  item: any; // ContactsType
  index: number;
}
export const DraggableItem: React.FC<Props> = ({ item, index }) => (
  <Draggable draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <div
        className={cn('draggable', { 'is-active': snapshot.isDragging })}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{item.name}</IonCardTitle>
            <IonCardSubtitle>{item.email}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{item.phone}</IonCardContent>
        </IonCard>
      </div>
    )}
  </Draggable>
);
