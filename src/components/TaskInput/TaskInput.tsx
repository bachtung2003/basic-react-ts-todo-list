import React from 'react'
import styles from './taskInput.module.scss'

const TaskInput = () => {
  return (
    <div>
      <h1 className={styles.title}>TS To do list</h1>
      <form className={styles.form}>
        <input type='text' placeholder='caption goes here' />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

export default TaskInput
