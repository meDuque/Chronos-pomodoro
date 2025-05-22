import { TrashIcon } from 'lucide-react'
import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { Heading } from '../../components/Heading'
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import { MainTemplate } from '../../templates/MainTemplate'
import styles from './styles.module.css'
import { formatDate } from '../../utils/formatDate'
import { getTaskStatus } from '../../utils/getaTaskStatus'

export function History() {
  const { state } = useTaskContext()
  const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate
  })

  return (
    <>
      <MainTemplate>
        {/*  */}
        <Container>
          <Heading>
            <span>Histórico</span>
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                aria-label='Apagar todo o histórico'
                title='Apagar o histórico'
              />
            </span>
          </Heading>
        </Container>

        <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortedTasks.map(task => {
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
        </Container>
        {/*  */}
      </MainTemplate>
    </>
  )
}
