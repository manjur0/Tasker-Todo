import { useState } from "react";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

const TaskBoard = () => {
  // initial Tasks here
  const defualtTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "Learn React for 1 hour",
    tags: ["react", "frontend", "js"],
    priority: "low",
    isFavourite: true,
  };
  // tasks state here
  const [tasks, setTasks] = useState([defualtTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // Add Task and Update Task Handler
  const handleAddToTasks = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    // close modal
    setShowAddModal(false);
  };

  // Edit Task Handler
  const handleEditTask = (editTask) => {
    setTaskToUpdate(editTask);
    setShowAddModal(true);
  };

  // Delete Task Handler
  const handleDeleteTask = (taskId) => {
    const filteredTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTask);
    console.log(filteredTask);
  };
  // Close Modal Handler
  const handleCloseModal = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddToTasks}
          taskToUpdate={taskToUpdate}
          onCloseModal={handleCloseModal}
        />
      )}

      <div className="container">
        <div className="p-2 flex justify-end">
          <Search />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          {/* Task List */}
          {tasks.length > 0 ? (
            <TaskLists
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
