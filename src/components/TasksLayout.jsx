const TaskLayout = ({ todos }) => {
  return (
    <>
      <div className="shadow-lg bg-amber-100 p-10 ml-30 rounded-lg">
        <h1 className="text-2xl font-bold text-black mb-2">TASKS</h1>
        <div>
          <ul>
            {todos.length > 0 ? (
              todos.map((task, index) => (
                <li key={index} className="flex items-center p-2 space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={(e) =>
                      e.target.nextSibling.classList.toggle("line-through")
                    }
                  />
                  <span>{task}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-500 my-2">No tasks added yet</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TaskLayout;
