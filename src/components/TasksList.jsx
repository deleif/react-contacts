import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks, deleteTask } from "../slices/tasks/tasksSlice";
import TasksCard from "./TasksCard";

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
                <TasksCard
                  key={index}
                  task={task}
                  deleteTask={() => dispatch(deleteTask(task.id))}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
