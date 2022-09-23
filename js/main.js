new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: [],
    nextTodoId: 1,
  },
  mounted: function() {
    if (localStorage.getItem("todosStrings")) {
      this.todos = JSON.parse(localStorage.getItem("todosStrings"))
      this.nextTodoId = JSON.parse(localStorage.getItem("nextTodoIdStrings"))
    }
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
      localStorage.setItem("todosStrings", JSON.stringify(this.todos))
      localStorage.setItem("nextTodoIdStrings", JSON.stringify(this.nextTodoId))
    },
    removeTodo: function(index) {
      if (confirm('このTodoを削除しますか?')){
        this.todos.splice(index, 1)
        localStorage.setItem("todosStrings", JSON.stringify(this.todos))
      }
    },
    updateTodo: function(index, todo) {
      todo.title = this.$refs[todo.id][0].value
      localStorage.setItem("todosStrings", JSON.stringify(this.todos))
      todo.isActive = !todo.isActive
    }
  }
})
