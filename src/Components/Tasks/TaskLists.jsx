import { MdOutlineStar } from "react-icons/md";

const TaskLists = ({ tasks, onEdit, onDelete, onIsFavourite }) => {
  // check if tasks is an array and has length greater than 0
  const tasksToRender = Array.isArray(tasks) && tasks?.length > 0 ? tasks : [];
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              {" "}
              Title{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              {" "}
              Description{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              {" "}
              Tags{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Priority{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {tasksToRender.map((tasksToRender) => (
            <tr
              key={tasksToRender.id}
              className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
            >
              <td
                className="cursor-pointer"
                onClick={() => onIsFavourite(tasksToRender.id)}
              >
                {tasksToRender.isFavourite ? (
                  <MdOutlineStar color="yellow" />
                ) : (
                  <MdOutlineStar color="gray" />
                )}
              </td>
              <td>{tasksToRender.title}</td>
              <td>
                <div>{tasksToRender.description}</div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  <li>
                    <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                      {tasksToRender.tags.map((tag) => tag).join(", ")}
                    </span>
                  </li>
                </ul>
              </td>
              <td className="text-center">{tasksToRender.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    onClick={() => onDelete(tasksToRender.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onEdit(tasksToRender)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskLists;
