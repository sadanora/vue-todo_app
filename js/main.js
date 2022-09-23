new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: '植物の水を替える',
        isActive: false
      },
      {
        id: 2,
        title: '手紙を書く',
        isActive: false
      },
      {
        id: 3,
        title: '住民税を払う',
        isActive: false
      }
    ],
    nextTodoId: 4,
  },
  methods: {
    addNewTodo: function() {
      if (this.newTodoText === '') return
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
        isActive: false
      })
      this.newTodoText = ''
    },
    removeTodo: function(index) {
      if (confirm('remove this task?')){
        this.todos.splice(index, 1)
      }
    },
    updateTodo: function(index, todo) {
      todo.title = this.$refs[todo.id][0].value
      todo.isActive = !todo.isActive
    }
  }
})
