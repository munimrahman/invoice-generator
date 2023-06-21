/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import { Link } from "react-router-dom";
// Use your own styles to override the default styles
// import "./styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "ToDos",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "Done",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
      ],
    },
  ],
};

function UncontrolledBoard() {
  return (
    <Board
      allowRemoveLane={console.log}
      allowRenameColumn
      onCardDragEnd={console.log}
      allowRemoveCard={console.log}
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard,
      })}
      onCardNew={console.log}
    />
  );
}

const Tasks = () => {
  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>Tasks</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">Tasks</h2>
      </div>
      <div className="bg-base-100 rounded p-5 mt-2 flex justify-center">
        <UncontrolledBoard />
      </div>
    </div>
  );
};

export default Tasks;
