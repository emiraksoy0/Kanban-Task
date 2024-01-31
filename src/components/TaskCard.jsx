import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

const TaskCard = ({ task, status }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="relative bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-md font-bold mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="absolute top-0 right-0 p-2"
      >
        ...
      </button>
      {showMenu && (
        <Menu
          task={task}
          status={status}
          closeMenu={() => setShowMenu(false)}
        />
      )}
    </div>
  )
}

export default TaskCard
