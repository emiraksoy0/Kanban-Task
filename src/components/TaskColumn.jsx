import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import TaskCard from './TaskCard'
import TaskContext from '../context/TaskContext'

const TaskColumn = ({ status }) => {
  const { state } = useContext(TaskContext)
  const statusTasks = state.tasks[status.toLowerCase()]

  const filteredTasks = statusTasks || []

  return (
    <div className="flex flex-col w-full lg:w-1/3 p-4">
      <h2 className="text-xl font-semibold capitalize">{status}</h2>
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} status={status} />
      ))}
    </div>
  )
}

TaskColumn.propTypes = {
  status: PropTypes.string.isRequired,
}

export default TaskColumn
