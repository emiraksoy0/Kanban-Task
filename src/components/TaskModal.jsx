import React, { useState } from 'react'
import * as Yup from 'yup'
import { taskContext } from '../context/TaskContext'
import { toUpperFormat } from '../utils/formatStatus'
import Button from './Button'

const TaskModal = ({ isModalOpen, closeModal, status }) => {
  const { dispatch } = taskContext()
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [priority, setPriority] = useState('')

  const validationSchema = Yup.object().shape({
    taskTitle: Yup.string().required('Title is required'),
    taskDescription: Yup.string().required('Description is required'),
    priority: Yup.string().required('Priority is required'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    validationSchema
      .validate({ taskTitle, taskDescription, priority })
      .then(() => {
        const newTask = {
          title: taskTitle,
          description: taskDescription,
          priority: priority,
          id: Math.floor(Math.random() * 10000),
        }

        const formattedStatus = toUpperFormat(status)
        dispatch({ type: `ADD_TASK_${formattedStatus}`, newTask })

        setTaskTitle('')
        setTaskDescription('')
        setPriority('')
        closeModal()
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div className={isModalOpen ? 'modal-overlay' : 'hidden'}>
      <div className="modal-content bg-white rounded-lg relative p-4">
        <div className="modal-header flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Task</h2>
          <Button
            onClick={closeModal}
            className="bg-red-500 text-white rounded-md p-2 h-8 w-8 flex items-center justify-center"
          >
            X
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Title"
            className="border p-2 rounded mb-4 w-full text-black"
          />
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Description"
            className="border p-2 rounded mb-4 w-full text-black"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border p-2 rounded mb-4 w-1/4 text-black"
          >
            <option value="" disabled selected>
              Choose Priority
            </option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
          <Button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Add Task
          </Button>
        </form>
      </div>
    </div>
  )
}

export default TaskModal
