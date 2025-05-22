import type { TaskModel } from '../models/TaskModel'

export function getTaskStatus(task: TaskModel) {
  if (task.completeDate) return 'completa'
  if (task.interruptedDate) return 'interrompida'
  return 'Em andamento'
}
