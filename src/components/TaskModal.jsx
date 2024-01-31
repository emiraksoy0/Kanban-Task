import React, { useState, useContext } from 'react'
import TaskContext from '../context/TaskContext'

const TaskModal = ({ closeModal }) => {
  const { addTask } = useContext(TaskContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [column, setColumn] = useState('todo')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({ title: taskTitle, id: Date.now() }, column)
    setTaskTitle('')
    closeModal()
  }

  return (
    <div className={isModalOpen ? 'modal-class' : 'hidden'}>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task title"
          className="border p-2 rounded mb-4 w-full"
        />
        <select
          value={column}
          onChange={(e) => setColumn(e.target.value)}
          className="border p-2 rounded mb-4 w-full"
        >
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskModal
