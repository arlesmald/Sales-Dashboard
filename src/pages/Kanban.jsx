import React from 'react';
import Board/* , { moveCard } */ from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

// import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const board = {
  columns: [
    {
      id: 1,
      title: 'Task Team1',
      cards: [
        {
          id: 1,
          title: 'Add delete button',
          description: 'Please add the delete button on shopping screen',
        },
        {
          id: 2,
          title: 'Fix Textbox issue',
          description: 'Textbox on users screen is giving problems when it comes to type on it',
        },
        {
          id: 3,
          title: 'Add column to a report',
          description: 'Sales report',
        },
      ],
    },
    {
      id: 2,
      title: 'Tasks Team 2',
      cards: [
        {
          id: 9,
          title: 'Add column to a new report',
          description: 'Students report',
        },
      ],
    },
    {
      id: 3,
      title: 'Tasks Team 3',
      cards: [
        {
          id: 10,
          title: 'Create a new screen',
          description: 'A new screen is needed to enter study information',
        },
        {
          id: 11,
          title: 'Write a mysql script',
          description: 'Script will get info about graduated students',
        },
      ],
    },
    // {
    //   id: 4,
    //   title: 'Production',
    //   cards: [
    //     {
    //       id: 12,
    //       title: 'Card title 12',
    //       description: 'Card content',
    //     },
    //     {
    //       id: 13,
    //       title: 'Card title 13',
    //       description: 'Card content',
    //     },
    //   ],
    // },
  ],
};

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Kanban" />
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: 'top' }}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard,
      })}
      onCardNew={console.log}
    />
  </div>
);

export default Kanban;
