import React from 'react'
import './toDoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'

const TodoList = () => {
  return (
    <div>
      ToDoList
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default TodoList
