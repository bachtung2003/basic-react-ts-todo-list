import React, { useState } from 'react'
import styles from './toDoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const completed = todos.filter((todo) => todo.done)
  const incomplete = todos.filter((todo) => !todo.done)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  console.log(todos)
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList doneTaskList={false} todos={incomplete} handleDoneTodo={handleDoneTodo} />
        <TaskList doneTaskList={true} todos={completed} handleDoneTodo={handleDoneTodo} />
      </div>
    </div>
  )
}

export default TodoList
