import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import TaskContext from '../context/TaskContext'
import Button from './Button'

const TaskCard = ({ task, status }) => {
  const { state } = useContext(TaskContext)
  const [showMenu, setShowMenu] = useState(false)
  const { priority, title, description, comments, files } = task

  return (
    <div
      className={`relative bg-gray-900 rounded-xl shadow-md p-4 my-4 overflow-hidden ${
        state.showHighOnly === true && priority === 'Low' ? 'hidden' : ''
      }  `}
    >
      <div className="flex justify-between items-start">
        <div
          className={`font-semibold py-1 px-3 rounded 
                        ${
                          priority === 'High'
                            ? 'bg-background_high  bg-opacity-18 text-text_high'
                            : 'bg-background_low bg-opacity-25 text-text_low'
                        }`}
        >
          {priority}
        </div>
        <Button
          onClick={() => setShowMenu(!showMenu)}
          className=" text-xl font-semibold "
        >
          ...
        </Button>
      </div>

      <h3 className="text-lg font-semibold text-white mt-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>

      <div className="flex items-center justify-end text-gray-400 text-sm mt-4">
        <p>{comments > 0 ? comments : 0} comments</p>
        <p className="ml-3">{files > 0 ? files : 0} files</p>
      </div>
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

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
}

export default TaskCard
