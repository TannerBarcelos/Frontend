<template>
  <div v-show="showAddTask">
    <AddTask @add-task="addTask" />
  </div>
  <Tasks
    :tasks="tasks"
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
  />
</template>
<script>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';
export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
  },
  data() {
    return { tasks: [] };
  },
  components: {
    Tasks,
    AddTask,
  },
  methods: {
    // Each of these methods are custom-emitted methods from children components that are attached to those components but have the state manipulated here

    // Add a task
    async addTask(newTask) {
      const res = await fetch(`/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },

    // Delete a task
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE',
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('There was a problem with your request');
      }
    },

    // Add a reminder to a task
    async toggleReminder(id) {
      const taskToggle = await this.fetchTask(id);
      const updatedTask = { ...taskToggle, reminder: !taskToggle.reminder };
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task,
      );
    },

    // Fetch all tasks from backend (json server for simplicity in this tutorial)
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();
      return data;
    },

    // Fetch a single task
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  // componentDidMount() / useEffect in react (created() is the method property we use to achieve this) - this is where any HTTP requests, etc. would be done for initial mount
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
