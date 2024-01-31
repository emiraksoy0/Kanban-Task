import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

const Button = ({ onClick, children, className, isFilter }) => {
  const { dispatch } = useContext(TaskContext)

  const filter = () => {
    dispatch({ type: 'TOGGLE_SHOW_HIGH' })
  }

  return (
    <button onClick={isFilter ? filter : onClick} className={className}>
      {children}
    </button>
  )
}

export default Button
