import React from 'react';
import './App.css';
import FormToDo from "./Components/FormToDo";
import ToDoList from "./Components/ToDoList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [doslist, setDolist] = useState([]);
  return (
    <div className="ToDolist">
      <header>
        <h1>What's The Plan Today?</h1>
      </header>
      <FormToDo inputText={inputText}  doslist={doslist} setDolist={setDolist} setInputText={setInputText} setStatus={setStatus} />
      <ToDoList setDolist={setDolist} doslist={doslist} filteredDoslist={filteredDoslist} />
    </div>
  );
}

export default App;