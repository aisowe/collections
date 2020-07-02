<template>
  <div>
    <nav-header></nav-header>
    <div class="container">
      <a-button type="default" @click="handleAdd">Add+</a-button>
      <ul>
        <list-item
          v-for="(item, index) in todoList"
          :todo-value="item.todoValue"
          :progress-radio="Number(item.progressRadio)"
          :index="index"
          :key="item.id"
        ></list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import ListItem from '@/components/ListItem.vue'
export default {
  name: 'home',
  components: {
    NavHeader,
    ListItem
  },
  data () {
    return {
      todoList: []
    }
  },
  mounted () {
    let todoList = JSON.parse(localStorage.getItem('todoList'))
    if (todoList === null) {
      localStorage.setItem('todoList', '[]')
      todoList = []
    } else {
      this.todoList = todoList
    }
  },
  methods: {
    handleAdd () {
      this.todoList.unshift({
        id: Date.now(),
        todoValue: 'XXX',
        progressRadio: 49
      })
    }
  }
}
</script>

<style scoped>
button {
  margin-bottom: 20px;
}
.container {
  padding: 20px;
}
ul,
li {
  list-style: none;
  padding-left: 0;
}
</style>
