
# React To-Do List App

  
The React To-Do List App is a simple application that allows users to create a to-do list using the useState() hook in React.

  
## Requirements

  

The app should meet the following requirements:

  

1. Task Input: Provide an input field where the user can enter a new task. The entered task should be stored in state using the useState() hook.

2. Add Task Functionality: Implement a button or submit action that allows the user to add the entered task to the to-do list. When the user clicks the button or submits the form, the task should be added to the list stored in state using the useState() hook.

3. Task List: Display the list of tasks added by the user. Each task should be rendered as an item in the list, showing the task description and an option to mark it as complete or delete it.

4. Remove Task Functionality: Add a delete button or icon for each task in the list. When the user clicks the delete button, the corresponding task should be removed from the list in the state using the useState() hook.

  

## Getting Started

  

To run the React To-Do List App locally, follow these steps:

  

1. Clone the repository: `git clone https://github.com/ahmad-ml/ostad-module-7-my-to-do-app.git`

2. Navigate to the project directory: `cd ostad-module-7-my-to-do-app`

3. Install dependencies: `npm install`

4. Start the development server: `npm start`

5. Open the application in your browser: `http://localhost:3000`

  

## Technologies Used

  

- React: A JavaScript library for building user interfaces.

  

## Project Structure

  

The project is structured as follows:

  

-  `src/App.js`: The main component that serves as the entry point for the application.

-  `src/components/TaskInput.js`: Component responsible for rendering the task input field and handling user input.

  
  

## License

  

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ahmad-ml/react-to-do-list-app/blob/main/LICENSE) file for more details.

  

## About Me

  

I'm a Leader.

  

## Links

[Project link](https://ostad-module-7-to-do-list.netlify.app)

[LinkedIn](https://www.linkedin.com/in/coolhead/)

[GitHub](https://github.com/ahmad-ml)
 

## Lessons Learned

  

While building this project, I learned several things:

  

- useState() hook: I gained a better understanding of how to use the useState() hook in React to manage state within functional components. I utilized it to store and update the list of tasks.

- Handling user input: I learned how to capture user input from a text field and update the state accordingly. The entered task was stored in state and added to the task list when the user clicked the add button or submitted the form.

- Rendering lists: I learned how to render a list of tasks dynamically using the map() function. Each task was rendered as an item in the task list component.

- Deleting tasks: I learned how to implement the functionality to delete tasks from the task list. Each task item had a delete button that, when clicked, removed the corresponding task from the state and updated the task list.

  

Challenges faced and how I overcame them:

  

- State management: Initially, managing the state of the task list and updating it correctly posed a challenge. However, by studying the useState() hook documentation and examples, I was able to overcome this challenge and implement the desired functionality.

- Rendering task list: Rendering a dynamic list of tasks and updating the UI accordingly required a clear understanding of React's rendering process. By following React's guidelines and using the map() function, I successfully rendered the task list.

- Deleting tasks: Implementing the delete functionality for each task in the list required careful handling of events and updating the state correctly. By breaking down the process into smaller steps and referring to React documentation, I was able to overcome this challenge.

  

Overall, building this to-do list app using the useState() hook in React helped me solidify my understanding of state management, user input handling, rendering lists, and event handling in React. It also reinforced the importance of referring to documentation and seeking out examples and tutorials when facing challenges.

  

This is a readme file for the current week's assignment.