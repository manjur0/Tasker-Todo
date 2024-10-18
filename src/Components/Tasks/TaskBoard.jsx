import { useState } from "react";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";

const TaskBoard = () => {
  // initial Tasks here
  const defualtTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "Learn React for 1 hour",
    tags: ["react", "frontend", "js"],
    priority: "low",
    isFavourite: true ,
  };
  // tasks state here
  const [tasks, setTasks] = useState([defualtTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <Search />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskLists tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
