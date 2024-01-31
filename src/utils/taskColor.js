export const Status = {
  Todo: 'Todo',
  OnProgress: 'On Progress',
  Done: 'Done',
}

export const statusColor = (status) => {
  switch (status) {
    case Status.Todo:
      return 'from-cyan-500 to-blue-500'
    case Status.OnProgress:
      return 'from-orange-400 to-orange-600'
    case Status.Done:
      return 'from-green-400 to-green-600'
    default:
      return ''
  }
}

export const statusPointColor = (status) => {
  switch (status) {
    case Status.Todo:
      return 'bg-cyan-400'
    case Status.OnProgress:
      return 'bg-orange-500'
    case Status.Done:
      return 'bg-green-500'
    default:
      return ''
  }
}

export const statusBorderColor = (status) => {
  switch (status) {
    case Status.Todo:
      return 'border-cyan-400'
    case Status.OnProgress:
      return 'border-orange-500'
    case Status.Done:
      return 'border-green-500'
    default:
      return ''
  }
}
