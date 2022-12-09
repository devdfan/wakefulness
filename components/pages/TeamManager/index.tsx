import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
} from '@ionic/react';
import { rocketOutline, optionsOutline, expandOutline } from 'ionicons/icons';
import { contacts } from 'mock';

import { DroppableItems } from './DroppableItems';
import { ColumnsType } from './types';

type TeamColumns = ColumnsType<Record<string, any>>;

export const lists = {
  users: {
    name: 'All users',
    items: contacts,
  },
  team: {
    name: 'Team',
    items: [],
  },
};

const TeamManager = () => {
  const [columns, setColumns] = React.useState<TeamColumns>(lists);

  const onDragEnd = (
    result: DropResult,
    columns: TeamColumns,
    setColumns: React.Dispatch<React.SetStateAction<TeamColumns>>
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column?.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Builder</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={expandOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={optionsOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={rocketOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lists</IonTitle>
          </IonToolbar>
        </IonHeader>

        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
          <IonGrid>
            <IonRow>
              {Object.entries(columns).map(([columnID, column]) => (
                <DroppableItems key={columnID} column={column} id={columnID} />
              ))}
            </IonRow>
          </IonGrid>
        </DragDropContext>
      </IonContent>
    </IonPage>
  );
};

export default TeamManager;
