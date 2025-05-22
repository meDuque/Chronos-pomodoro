import { TrashIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { Dialog } from '../../components/Dialog'
import { Heading } from '../../components/Heading'
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import { MainTemplate } from '../../templates/MainTemplate'
import { formatDate } from '../../utils/formatDate'
import { getTaskStatus } from '../../utils/getaTaskStatus'
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks'
import styles from './styles.module.css'
import { showMessage } from '../../adapters/showMessage'
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions'

export function History() {
  const { state, dispatch } = useTaskContext()
  const [confirmClearHistory, setConfirmClearHistory] = useState(false)
  const hasTask = state.tasks.length > 0
  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(() => {
    return { tasks: sortTasks({ tasks: state.tasks }), field: 'startDate', direction: 'desc' }
  })

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }))
  }, [state.tasks])

  useEffect(() => {
    if (!confirmClearHistory) return
    setConfirmClearHistory(false)

    dispatch({ type: TaskActionTypes.RESET_STATE })
  }, [confirmClearHistory, dispatch])

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc'

    setSortTaskOptions({
      tasks: sortTasks({ direction: newDirection, tasks: sortTaskOptions.tasks, field }),
      direction: newDirection,
      field,
    })
  }

  function handleResetHistory() {
    showMessage.dismiss()
    showMessage.confim(
      'Tem certeza que deseja apagar o histórico de tarefas?',
      confirmation => {
        setConfirmClearHistory(confirmation)
      },
    )
  }

  return (
    <>
      <MainTemplate>
        {/*  */}
        <Container>
          <Heading>
            <span>Histórico</span>
            {hasTask && (
              <span className={styles.buttonContainer}>
                <DefaultButton
                  icon={<TrashIcon />}
                  color='red'
                  aria-label='Apagar todo o histórico'
                  title='Apagar o histórico'
                  onClick={handleResetHistory}
                />
              </span>
            )}
          </Heading>
        </Container>

        <Container>
          {hasTask && (
            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'name' })}
                    >
                      Tarefa ↕
                    </th>
                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'duration' })}
                    >
                      Duração ↕
                    </th>
                    <th
                      className={styles.thSort}
                      onClick={() => handleSortTasks({ field: 'startDate' })}
                    >
                      Data ↕
                    </th>
                    <th>Status</th>
                    <th>Tipo</th>
                  </tr>
                </thead>

                <tbody>
                  {sortTaskOptions.tasks.map(task => {
                    enum taskTypeDictionary {
                      workTime = 'Foco',
                      shortBreakTime = 'Descanso curto',
                      longBreakTime = 'Descanso longo',
                    }

                    return (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.duration}</td>
                        <td>{formatDate(task.startDate)}</td>
                        <td>{getTaskStatus(task, state.activeTask)}</td>
                        <td>{taskTypeDictionary[task.type]}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
          {!hasTask && (
            <p className={styles.noHistory}>Ainda não existem tarefas criadas...</p>
          )}
        </Container>
        {/*  */}
      </MainTemplate>
    </>
  )
}
