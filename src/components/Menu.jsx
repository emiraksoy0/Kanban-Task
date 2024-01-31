import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import TaskContext from '../context/TaskContext'
import { toLowerFormat } from '../utils/formatStatus'
import Button from './Button'

const Menu = ({ task, status, closeMenu }) => {
  const { dispatch } = useContext(TaskContext)

  const handleMove = (newStatus) => {
    const formattedNewStatus = toLowerFormat(newStatus)
    dispatch({
      type: 'MOVE',
      payload: { task, newStatus: formattedNewStatus },
    })
    closeMenu()
  }

  const handleDelete = () => {
    const formattedStatus = toLowerFormat(status)
    dispatch({
      type: 'DELETE_TASK',
      payload: { id: task.id, status: formattedStatus },
    })
    closeMenu()
  }
  return (
    <div className="absolute right-0 mt-2 py-2 w-40 bg-gray-800 rounded-xl shadow-xl z-20 top-10 divide-y divide-gray-900">
      {status === 'On Progress' && status !== 'Done' && (
        <Button
          onClick={() => handleMove('ToDo')}
          className="block w-full text-left px-4 py-2 text-sm capitalize text-gray-300 hover:bg-blue-600 hover:text-white"
        >
          Move to Todo
        </Button>
      )}
      {status !== 'On Progress' && (
        <Button
          onClick={() => handleMove('OnProgress')}
          className="block w-full text-left px-4 py-2 text-sm capitalize text-gray-300 hover:bg-blue-600 hover:text-white"
        >
          Move to Progress
        </Button>
      )}
      {status !== 'Done' && (
        <Button
          onClick={() => handleMove('Done', status, task)}
          className="block w-full text-left px-4 py-2 text-sm capitalize text-gray-300 hover:bg-blue-600 hover:text-white"
        >
          Move to Done
        </Button>
      )}

      <Button
        onClick={handleDelete}
        className="block w-full text-left px-4 py-2 text-sm capitalize text-gray-300 hover:bg-red-600 hover:text-white"
      >
        Delete Task
      </Button>
    </div>
  )
}

Menu.propTypes = {
  task: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
}

export default Menu
