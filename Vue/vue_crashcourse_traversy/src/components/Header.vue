<template>
  <header>
    <h1>{{ title }}</h1>
    <!--Only show button if on homePage. We can do this with computed-->
    <Button
      v-show="homePage"
      :text="showAddTask ? 'Close' : 'Add a Task'"
      :color="showAddTask ? 'Blue' : 'Black'"
      @btn-click="$emit('toggle-add-task')"
    />
  </header>
</template>

<script>
// Imports for the component go right below script
import Button from './Button.vue';

export default {
  // Name of Component for exporting
  name: 'Header',
  // Component incoming props
  props: {
    title: String,
    showAddTask: Boolean,
  },
  //Components imported to this Vue file (component)
  components: {
    Button,
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true;
      }
      return false;
    },
  },
};

/* The export default object section is where all the data that is to be within this component lives 
    - Component Name
    - Component Props (Default, type etc.)
    - Imported components to be nested within this component
    - Methods
    - Mounting
    - Watchers
*/
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
