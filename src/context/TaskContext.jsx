import React, { createContext, useReducer } from 'react'

const TaskContext = createContext()

const initialState = {
  tasks: {
    todo: [],
    inProgress: [],
    done: [],
  },
  isModalOpen: false,
  showHighOnly: false,
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.column]: [
            ...state.tasks[action.payload.column],
            action.payload.task,
          ],
        },
      }
    case 'MOVE_TASK':
      break
    case 'DELETE_TASK':
      break
    case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: !state.isModalOpen }
    case 'TOGGLE_SHOW_HIGH':
      return { ...state, showHighOnly: !state.showHighOnly }
    default:
      return state
  }
}

export const TaskCardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  const contextValue = {
    state,
    dispatch,
  }

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  )
}

export default TaskContext
