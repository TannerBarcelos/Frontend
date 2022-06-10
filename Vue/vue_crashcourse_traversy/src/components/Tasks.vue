<template>
  <div v-for="task in tasks" :key="task.id">
    <!-- v-bind each task from our task response we are looping over to our Task component to pass its data down as props-->
    <!-- emitting our 'custom' event (our delete handler in task.vue) up to app.vue-->
    <Task
      :task="task"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
    />
  </div>
</template>

<script>
import Task from './Task.vue';
export default {
  name: 'Tasks',
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
  emits: ['delete-task', 'toggle-reminder'], // an array of events we are emitting (passing up)
};
</script>
