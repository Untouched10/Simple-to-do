import { useState } from "react";

const Card1 = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeySelect = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="shadow-lg rounded-xl bg-amber-100 p-10">
        <h1 className="text-black text-2xl font-bold">TO-DO LIST</h1>
        <input
          type="text"
          placeholder="Enter Task"
          className="my-5 border-1 border-gray-500 rounded-lg py-3 px-5"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeySelect}
        />
        <div>
          <button
            className="bg-blue-700 text-white shadow-lg py-2 px-5 rounded-lg hover:bg-blue-800 cursor-pointer"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};
export default Card1;
