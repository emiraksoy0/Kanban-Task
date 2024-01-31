import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import TaskContext from '../context/TaskContext'

const Menu = ({ task, status, closeMenu }) => {
  const { dispatch } = useContext(TaskContext)

  const handleMove = (newStatus) => {
    dispatch({
      type: 'MOVE_TASK',
      payload: { task, newStatus: newStatus.toLowerCase() },
    })
    closeMenu()
  }

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TASK',
      payload: { id: task.id, status: status.toLowerCase() },
    })
    closeMenu()
  }

  return (
    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
      {status !== 'InProgress' && (
        <button
          onClick={() => handleMove('InProgress')}
          className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
        >
          Move to Progress
        </button>
      )}
      {status !== 'Done' && (
        <button
          onClick={() => handleMove('Done')}
          className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
        >
          Move to Done
        </button>
      )}
      <button
        onClick={handleDelete}
        className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-red-500 hover:text-white"
      >
        Delete Task
      </button>
    </div>
  )
}

Menu.propTypes = {
  task: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
}

export default Menu
