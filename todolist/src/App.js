import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
const App = () => {
  const [todoList, setTodoList] = useState([]);

  const AddItem = (item) => {
    if (!item.title) {
      alert('Please enter a text');
      return;
    }
    setTodoList([...todoList, item]);
  };

  const DeleteItem = (id) => {
    const updatedList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedList);
  };

  const TaskDone = (id) => {
    const updatedList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: true };
      }
      return task;
    });
    setTodoList(updatedList);
  };


  return (
    <div className='App'>
      <div className='maindiv'>
        <h1>Todo List</h1>
        <AddTask AddItem={AddItem} />
        {todoList.length > 0 && <Tasks items={todoList} DeleteItem={DeleteItem} TaskDone={TaskDone} />}
      </div>
    </div>
  )
}

export default App
