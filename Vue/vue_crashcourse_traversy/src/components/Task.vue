<template>
  <!-- Vues version of dynamic styling using vbind - we can do multiple classes in an array like below nesting ternary styles too-->
  <div
    :class="[task.reminder ? 'reminder' : '', 'task']"
    @dblclick="$emit('toggle-reminder', task.id)"
  >
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
};
</script>

<style scoped>
.fas {
  color: rgb(218, 79, 79);
}
.task {
  background: #f4f4f4;
  margin: 7px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.task.reminder {
  border-left: 5px solid rgb(119, 173, 119);
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
