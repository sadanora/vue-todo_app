const KEY = "todos"

new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: [],
    nextTodoId: 1,
  },
  mounted: function() {
    if (localStorage.hasOwnProperty(KEY)) {
      this.todos = JSON.parse(localStorage.getItem(KEY))
      this.nextTodoId = JSON.parse(localStorage.getItem("nextTodoIdStrings"))
    }
  },
  methods: {
    addNewTodo: function() {
      if (this.newTodoText === '') return
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
        isEditing: false
      })
      this.newTodoText = ''
      localStorage.setItem(KEY, JSON.stringify(this.todos))
      localStorage.setItem("nextTodoIdStrings", JSON.stringify(this.nextTodoId))
    },
    updateTodo: function(todo) {
      todo.title = this.$refs[todo.id][0].value
      todo.isEditing = false
      localStorage.setItem(KEY, JSON.stringify(this.todos))
    },
    switchIsEditing: function(todo) {
      todo.isEditing = !todo.isEditing
      localStorage.setItem(KEY, JSON.stringify(this.todos))
    },
    removeTodo: function(index) {
      if (confirm('このTodoを削除しますか?')) {
        this.todos.splice(index, 1)
        localStorage.setItem(KEY, JSON.stringify(this.todos))
      }
    },
    removeAllTodo: function() {
      if (confirm('すべてのTodoを削除しますか?')) {
        localStorage.removeItem(KEY)
        localStorage.removeItem("nextTodoIdStrings")
      }
    }
  }
})
