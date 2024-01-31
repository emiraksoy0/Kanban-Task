import React, { useContext, useState } from 'react'
import TaskCard from './TaskCard'
import TaskContext from '../context/TaskContext'
import Button from './Button'
import TaskModal from './TaskModal'
import {
  statusColor,
  statusPointColor,
  statusBorderColor,
  Status,
} from '../utils/taskColor'
import { toLowerFormat } from '../utils/formatStatus'

const TaskColumn = ({ status }) => {
  const { state } = useContext(TaskContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  let statusEnumValue
  switch (status) {
    case 'Todo':
      statusEnumValue = Status.Todo
      break
    case 'On Progress':
      statusEnumValue = Status.OnProgress
      break
    case 'Done':
      statusEnumValue = Status.Done
      break
    default:
      statusEnumValue = Status.Todo
      break
  }

  const formattedStatus = toLowerFormat(status)
  const statusTasks = state.tasks[formattedStatus]
  const filteredTasks = statusTasks || []

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div className="flex flex-col bg-gray-800 w-full lg:w-1/3 p-1 rounded-lg shadow-lg ">
      <div
        className={`flex items-center justify-between p-2 ${statusColor(
          statusEnumValue
        )} rounded-t-lg`}
      >
        <div className="flex items-center">
          <span
            className={`h-3 w-3 rounded-full ${statusPointColor(
              statusEnumValue
            )} mr-2`}
          ></span>
          <h2 className="text-xl font-semibold text-white">{status}</h2>
        </div>
        <div>
          <Button
            className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-md hover:bg-gray-300 hover:text-gray-800 text-white font-extrabold"
            onClick={toggleModal}
          >
            +
          </Button>
        </div>
      </div>
      <div
        className={`border-t-2 ${statusBorderColor(statusEnumValue)} w-full`}
      ></div>

      <div className="flex-1 p-2 bg-gray-800 rounded-b-lg">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} status={status} />
        ))}
      </div>

      {isModalOpen && (
        <TaskModal
          isModalOpen={isModalOpen}
          closeModal={toggleModal}
          status={status}
        />
      )}
    </div>
  )
}

export default TaskColumn
