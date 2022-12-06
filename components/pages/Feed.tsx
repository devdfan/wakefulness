import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
  IonMenu,
  IonMenuToggle,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/react';
import { notificationsOutline, layersOutline } from 'ionicons/icons';

import Notifications from './Notifications';
import Card from '../ui/Card';
import Statistic from '../ui/Statistic';
import Store from '../../store';
import { getHomeItems } from '../../store/selectors';

const FeedCard = ({ title, type, text, author, authorAvatar, image }) => (
  <Card className="mx-3 cursor-pointer transition transform hover:-translate-y-1 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:transform-none">
    <div className="h-32 w-full relative">
      <img
        className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
        src={image}
        alt=""
      />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-primary uppercase">{type}</h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <img
            src={authorAvatar}
            className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full"
            alt=""
          />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
      </div>
    </div>
  </Card>
);

const Feed = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <IonMenu type="reveal" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to close the menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <IonMenuToggle /> Menu
            </IonTitle>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowNotifications(true)}>
                <IonIcon icon={notificationsOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Feed</IonTitle>
            </IonToolbar>
          </IonHeader>

          <Notifications
            open={showNotifications}
            onDidDismiss={() => setShowNotifications(false)}
          />

          <IonGrid fixed>
            <IonRow>
              <IonCol size="12" sizeXs="12" sizeLg="4">
                <Statistic title="Performance" data={[0.4, 0.3, 0.6]} />
              </IonCol>
              <IonCol size="12" sizeMd="6" sizeLg="4">
                <Statistic title="Traffic" data={[-0.5, -0.4, -0.5]} />
              </IonCol>
              <IonCol size="12" sizeMd="6" sizeLg="4">
                <Statistic title="Payments" data={[0.5, 0.3, 2]} />
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonGrid fixed>
            <IonRow>
              {homeItems.map((i, index) => (
                <IonCol key={index} size="12" sizeMd="4">
                  <FeedCard {...i} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Feed;
