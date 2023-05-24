import React from "react";

const TasksCard = ({ task, deleteTask, changeTask }) => {
  return (
    <tr>
      <td className="py-2 px-1 border-b border-gray-200">{task.id}</td>
      <td className="py-2 px-1 border-b border-gray-200">{task.userId}</td>
      <td className="py-2 px-1 border-b border-gray-200">{task.title}</td>
      <td
        className="py-2 px-1 border-b border-gray-200 text-center"
        onClick={() => changeTask(task.id)}
      >
        {task.completed ? (
          <span className="text-green-500">&#10004;</span>
        ) : (
          <span className="text-red-500">&#10008;</span>
        )}
      </td>
      <td>
        <button className="text-sm bg-gray-400 hover:bg-gray-600 text-white py-1 px-3 rounded ml-2">
          Añadir
        </button>
        <button
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded ml-2"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TasksCard;
