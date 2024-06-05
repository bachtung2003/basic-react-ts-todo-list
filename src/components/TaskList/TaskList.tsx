import React from 'react'
import styles from './taskList.module.scss'

const TaskList = () => {
  return (
    <div>
      <h2 className={styles.title}>Completed</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Learn</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖋️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskList
