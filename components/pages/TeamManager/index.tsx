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
import { DroppableItems } from './DroppableItems';

export const contacts = [
  {
    id: '1',
    name: 'Allen Raymond',
    age: 40,
    email: 'nulla.ante@vestibul.co.uk',
    phone: '(992) 914-3792',
  },
  {
    id: '2',
    name: 'Chaim Lewis',
    age: 40,
    email: 'dui.in@egetlacus.ca',
    phone: '(294) 840-6685',
  },
  {
    id: '3',
    name: 'Kennedy Lane',
    age: 40,
    email: 'mattis.Cras@nonenimMauris.net',
    phone: '(542) 451-7038',
  },
  {
    id: '4',
    name: 'Wylie Pope',
    age: 40,
    email: 'est@utquamvel.net',
    phone: '(692) 802-2949',
  },
  {
    id: '5',
    name: 'Cyrus Jackson',
    age: 40,
    email: 'nibh@semsempererat.com',
    phone: '(501) 472-5218',
  },
  {
    id: '6',
    name: 'Abbot Franks',
    age: 40,
    email: 'scelerisque@magnis.org',
    phone: '(186) 568-3720',
  },
  {
    id: '7',
    name: 'Reuben Henry',
    age: 40,
    email: 'pharetra.ut@dictum.co.uk',
    phone: '(715) 598-5792',
  },
  {
    id: '8',
    name: 'Simon Morton',
    age: 40,
    email: 'dui.Fusce.diam@Donec.com',
    phone: '(233) 738-2360',
  },
  {
    id: '9',
    name: 'Alex Raypinos',
    age: 40,
    email: 'raypino@vestibul.co.uk',
    phone: '(992) 834-3799',
  },
  {
    id: '10',
    name: 'Alec Howard',
    age: 35,
    email: 'Donec.elementum@scelari.net',
    phone: '(748) 206-2688',
  },
];

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

export interface ContactsType {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
}
export interface ObjectList {
  name: string;
  items: ContactsType[];
}
export interface ObjectContacts<ObjectList> {
  [id: string]: ObjectList;
}

const TeamManager = () => {
  const [columns, setColumns] = React.useState<ObjectContacts<ObjectList>>(lists);

  const onDragEnd = (
    result: DropResult,
    columns: ObjectContacts<ObjectList>,
    setColumns: React.Dispatch<React.SetStateAction<ObjectContacts<ObjectList>>>
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
