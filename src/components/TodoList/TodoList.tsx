import React from 'react'
import styles from './toDoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'

const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput />
        <TaskList />
        <TaskList />
      </div>
    </div>
  )
}

export default TodoList
