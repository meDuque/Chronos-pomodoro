export type TaskModel = {
  id: string
  name: string
  duration: number
  startDate: number
  completeDate: number
  interruptedDate: number
  type: TaskType
}

export enum TaskType {
  WORK = 'workTime',
  SHORT_BREAK = 'shortBreakTime',
  LONG_BREAK = 'longBreakTime',
}
