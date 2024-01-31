import React, { createContext, useContext, useReducer } from 'react'

const TaskContext = createContext()
export const taskContext = () => {
  return useContext(TaskContext)
}

const initialState = {
  tasks: {
    todo: [
      {
        title: 'Task',
        id: 0,
        priority: 'Low',
        description:
          'This task includes routine and non-urgent work. Tasks such as performing routine checks fall into this category. These tasks can be done after other urgent tasks are finished.',
        comments: 12,
        files: 0,
      },
    ],
    onprogress: [],
    done: [],
  },
  isModalOpen: false,
  showHighOnly: false,
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK_TODO':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          todo: [...state.tasks.todo, action.newTask],
        },
      }
    case 'ADD_TASK_ONPROGRESS':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          onprogress: [...state.tasks.onprogress, action.newTask],
        },
      }
    case 'ADD_TASK_DONE':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          done: [...state.tasks.done, action.newTask],
        },
      }
    case 'MOVE':
      const { task, newStatus } = action.payload

      const newTasksState = {
        ...state.tasks,
        [newStatus]: [...state.tasks[newStatus], task],
      }
      let array = ['todo', 'onprogress', 'done']

      let sonuc = array.filter((item) => item !== newStatus)

      sonuc.forEach((status) => {
        if (newTasksState[status]) {
          newTasksState[status] = newTasksState[status].filter(
            (t) => t.id !== task.id
          )
        }
      })

      return {
        ...state,
        tasks: newTasksState,
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.status]: state.tasks[action.payload.status].filter(
            (item) => item.id !== action.payload.id
          ),
        },
      }
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
