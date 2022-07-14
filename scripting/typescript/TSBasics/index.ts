import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/todos/1';

/*
 * Interface: Used to define the shape and structure of some object
 */
interface Todo {
  id: Number;
  userId: Number;
  title: String;
  completed: Boolean;
}

axios.get(baseURL).then((res) => {
  // Shape the todo data from the response as what is described as a Todo
  const todoData = res.data as Todo;

  // console.log(todoData);

  // Notice the properties we are accessing are wrong (underlined in red [uncomment to see]). Our editor did not know that!
  // SO not until we ran the code did we know. We can avoid this using our first TypeScript enhancement feature - interfaces
  // const ID = todoData.ID;
  // const todoTitle = todoData.Title;
  // const isFinished = todoData.finished;

  const id = todoData.id;
  const userId = todoData.userId;
  const title = todoData.title;
  const completed = todoData.completed;

  // logTodo(completed, id, title, userId); <- Notice i put these in the wrong order - because of our type annotations in the function declaration
  // the function here shows that completed (boolean) is not valid in type string for the first argument the function expected

  // This is correct
  logTodo(id, title, completed, userId);
});

const logTodo = (
  id: Number,
  title: String,
  completed: Boolean,
  userId: Number,
) => {
  console.log(`
    Todo ID: ${id}
    User ID: ${userId}
    Todo Title: ${title}
    Completed: ${completed}
  `);
};
