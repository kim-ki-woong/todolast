<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-content></todo-content>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoContent from "./components/TodoContent.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: {
    "todo-header": TodoHeader,
    "todo-content": TodoContent,
    "todo-footer": TodoFooter
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
#app {
  font-family: 'Do Hyeon', sans-serif;
}
</style>