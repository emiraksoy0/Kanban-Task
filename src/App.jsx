import { TaskCardProvider } from './context/TaskContext'
import TaskColumn from './components/TaskColumn'
import Button from './components/Button'

const App = () => {
  const taskStatuses = ['Todo', 'On Progress', 'Done']

  return (
    <TaskCardProvider>
      <div className="bg-secondary min-h-screen text-white">
        <div className="container mx-auto py-12">
          <div className="flex justify-between mb-4">
            <h1 className="text-4xl font-bold mb-4">Tasks</h1>
            <Button
              className={
                'bg-primary cursor-pointer py-2 px-6 font-semibold rounded-lg text-white '
              }
              isFilter
            >
              Show Only High
            </Button>
          </div>
          <div className="flex justify-between mt-20 space-x-4 onlysm:flex-col onlysm:space-x-0 onlysm:mx-2 onlysm:space-y-4">
            {taskStatuses.map((status) => (
              <TaskColumn key={status} status={status} />
            ))}
          </div>
        </div>
      </div>
    </TaskCardProvider>
  )
}

export default App
