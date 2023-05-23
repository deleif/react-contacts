import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../slices/tasks/tasksSlice";

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl text-gray-700 p-2">Listado de tareas</h2>
        </div>

        <div className="">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-1 border-b border-gray-200">ID</th>
                <th className="py-2 px-1 border-b border-gray-200">User</th>
                <th className="py-2 px-1 border-b border-gray-200">Tarea</th>
                <th className="py-2 px-1 border-b border-gray-200">
                  Completada
                </th>
                <th className="colspan-2"></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr>
                  <td
                    className="py-2  px-1 border-b border-gray-200"
                    key={index}
                  >
                    {task.id}
                  </td>
                  <td
                    className="py-2  px-1 border-b border-gray-200"
                    key={index}
                  >
                    {task.userId}
                  </td>
                  <td
                    className="py-2  px-1 border-b border-gray-200"
                    key={index}
                  >
                    {task.title}
                  </td>
                  <td
                    className="py-2 px-1  border-b border-gray-200 text-center"
                    key={index}
                  >
                    {task.completed ? (
                      <span className="text-green-500">&#10004;</span>
                    ) : (
                      <span className="text-red-500">&#10008;</span>
                    )}
                  </td>
                  <td>
                    <button className="text-sm  bg-gray-400 hover:bg-gray-600 text-white  py-1 px-3 rounded ml-2">
                      Añadir
                    </button>
                    <button className="text-sm  bg-red-500 hover:bg-red-700 text-white  py-1 px-3 rounded ml-2">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/*     <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default TasksList;
