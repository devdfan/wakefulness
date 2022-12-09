import React from 'react';
import {
  IonItem,
  IonAvatar,
  IonLabel,
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
        <IonItem>
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>
            {item.name}
            <p>{item.email}</p>
          </IonLabel>
        </IonItem>
      </div>
    )}
  </Draggable>
);
