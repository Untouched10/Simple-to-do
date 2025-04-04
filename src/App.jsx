import { useState } from "react";
import "./App.css";
import Card1 from "./components/Card1";
import TaskLayout from "./components/TasksLayout";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div className="flex justify-center items-center text-center h-screen bg-blue-950">
        <Card1 todos={todos} setTodos={setTodos} />
        <TaskLayout todos={todos} />
      </div>
    </>
  );
}

export default App;
