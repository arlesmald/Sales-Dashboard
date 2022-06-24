import React, { useState } from 'react';
import { Scheduler as SchedulerComponent } from '@aldabil/react-scheduler';

// import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Scheduler = () => {
  const h=0;

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <SchedulerComponent
        view="month"
        events={[
          {
            event_id: 1,
            title: 'Event 1',
            start: new Date('2022/5/2 09:30'),
            end: new Date('2022/5/2 10:30'),
          },
          {
            event_id: 2,
            title: 'Event 2',
            start: new Date('2022/5/4 10:00'),
            end: new Date('2022/5/4 11:00'),
          },
          {
            event_id: 3,
            title: 'Event 3',
            start: new Date('2022/6/6 02:00'),
            end: new Date('2022/6/7 03:40'),
          },
          {
            event_id: 4,
            title: 'Event 4',
            start: new Date('2022/6/4 08:40'),
            end: new Date('2022/6/4 10:00'),
          },
        ]}
      />
    </div>
  );
};

export default Scheduler;
