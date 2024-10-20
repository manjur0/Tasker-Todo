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

  // Add Task Handler
  const handleAddToTasks = (newTask) => {
    setTasks([...tasks, newTask]);
    // close modal
    setShowAddModal(false);
  };

  // Delete Task Handler
  const handleDeleteTask = (taskId) => {
    const filteredTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTask);
    console.log(filteredTask);
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddToTasks} />}

      <div className="container">
        <div className="p-2 flex justify-end">
          <Search />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          {/* Task List */}
          {tasks.length > 0 ? (
            <TaskLists tasks={tasks} onDelete={handleDeleteTask} />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
