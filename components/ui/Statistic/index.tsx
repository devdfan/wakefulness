import React, { useMemo } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';

const Statistic = ({ title, data }) => {
  const value = useMemo(
    () => (data.reduce((acc, curr) => (acc += curr), 0) / data.length) * 100,
    [data]
  );

  return (
    <div className="card-statistic">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{title}</IonCardTitle>
          <IonCardSubtitle
            className={`text-${value > 0 ? 'gray' : 'danger'}-500 dark:text-${
              value > 0 ? 'primary' : 'danger'
            }`}
          >
            {value > 0 ? '+' : '-'} {(value < 0 ? value * -1 : value).toFixed(2)}%
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent />
      </IonCard>
      <div className="card-statistic__chart">
        {/* <Line
          data={{
            labels: data,
            datasets: [{ data }],
          }}
          width={100}
          height={40}
          options={{
            ...options,
            elements: {
              ...options.elements,
              line: {
                ...options.elements.line,
                borderColor: value > 0 ? options.elements.line.borderColor : `rgba(235, 68, 90, 1)`,
                backgroundColor:
                  value > 0 ? options.elements.line.backgroundColor : `rgba(235, 68, 90, 0.3)`,
              },
            },
          }}
        /> */}
      </div>
    </div>
  );
};

// const options = {
//   plugins: { legend: { display: false } },
//   elements: {
//     line: {
//       tension: 0,
//       borderWidth: 2,
//       borderColor: `rgba(47,97,68, 1)`,
//       fill: 'start',
//       backgroundColor: `rgba(47, 97, 68, 0.3)`,
//     },
//     point: {
//       radius: 0,
//       hitRadius: 0,
//     },
//   },
//   scales: {
//     x: {
//       display: false,
//     },
//     y: {
//       display: false,
//     },
//   },
// };

export default Statistic;
