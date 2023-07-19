import React, { useState } from 'react';

export default function TaskInput() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setNewTask("");
    setNewTaskDescription("");
  }

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  }

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleTaskDescriptionChange = (event) => {
    setNewTaskDescription(event.target.value);
  }

  return (
    <div>
      <h1 className='header'>Todo App</h1>

      <form
        onSubmit={event => {
          event.preventDefault();
          addTask({ title: newTask, description: newTaskDescription });
        }}
        className="form-container"
      >
        <input
          value={newTask}
          onChange={handleTaskInputChange}
          placeholder="Enter a new task"
          className="input-field"
        />

        <input
          value={newTaskDescription}
          onChange={handleTaskDescriptionChange}
          placeholder="Enter task description"
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
    <li key={index} className={`task-list-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task)}
        />
        <span className="task-title">{task.title}</span>
        <p className={`task-description ${task.completed ? 'completed-task' : ''}`}>
          {task.description}
        </p>
      </div>
      <button onClick={() => removeTask(task)} className="delete-btn">
        Delete
      </button>
    </li>
  ))}
</ul>

    </div>
  );
}
