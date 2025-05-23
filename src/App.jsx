import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import EditTask from "./components/EditTask";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
