import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setNewTask("");
  }

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  }

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const fullName = 'Ahmad';
  const occupation = 'Web Developer';
  const favoriteQuote = "Time is a precious resource. Don't wait for it to happen, make it happen.";

  return (
    <div>
      <h1>Todo App</h1>

      <form 
        onSubmit={event => {
          event.preventDefault();
          addTask(newTask);
        }}
        className="form-container"
      >
        <input 
          value={newTask}
          onChange={handleTaskInputChange}
          placeholder="Enter a new task"
          className="input-field"
        />
        <button 
          type="submit"
          className="submit-btn"
        >
          Add task
        </button>
      </form>


      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-list-item">
            {task}
            <button onClick={() => removeTask(task)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
      <footer className="footer">
      <div className="footer-content">
        <h3>About {fullName}</h3>
        <p>
          Hello, I'm {fullName}, a passionate {occupation}. I love creating innovative and user-friendly web applications that make a difference. Through my work, I strive to push boundaries and explore new possibilities in the digital realm.
        </p>
        <p>
          In my journey as a developer, I've learned that taking risks and embracing failure are key to personal and professional growth. One quote that resonates with me is: 
        </p>
        <blockquote className="favorite-quote">
          "{favoriteQuote}"
        </blockquote>
        <p>
          This quote inspires me to dream big and not be afraid of stumbling along the way. It reminds me that failure is not the end but an opportunity to learn, improve, and achieve greater things.
        </p>
      </div>
      <div className="footer-social">
        {/* Add your social media links here */}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {fullName}. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
