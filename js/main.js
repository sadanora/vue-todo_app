const TODOS_KEY = "todos"
const NEXT_TODO_ID_KEY = "nextTodoID"

new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: [],
    nextTodoId: 1,
  },
  mounted: function() {
    if (localStorage.hasOwnProperty(TODOS_KEY)) {
      this.todos = JSON.parse(localStorage.getItem(TODOS_KEY))
      this.nextTodoId = localStorage.getItem(NEXT_TODO_ID_KEY)
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
      localStorage.setItem(TODOS_KEY, JSON.stringify(this.todos))
      localStorage.setItem(NEXT_TODO_ID_KEY, this.nextTodoId)
    },
    updateTodo: function(todo) {
      todo.title = document.getElementById("editedTitle").value
      todo.isEditing = false
      localStorage.setItem(TODOS_KEY, JSON.stringify(this.todos))
    },
    switchIsEditing: function(todo) {
      todo.isEditing = !todo.isEditing
      localStorage.setItem(TODOS_KEY, JSON.stringify(this.todos))
    },
    removeTodo: function(index) {
      if (confirm('このTodoを削除しますか?')) {
        this.todos.splice(index, 1)
        localStorage.setItem(TODOS_KEY, JSON.stringify(this.todos))
      }
    },
    removeAllTodo: function() {
      if (confirm('すべてのTodoを削除しますか?')) {
        localStorage.removeItem(TODOS_KEY)
        localStorage.removeItem(NEXT_TODO_ID_KEY)
      }
    }
  }
})
