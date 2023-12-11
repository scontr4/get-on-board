import { useState } from 'react'
import { Todos } from './components/Todos'
import { Header } from './components/Header'
import { type TodoId, type Todo as TodoType } from './types'
import './styles.css'

const mockTodos = [
  {
    id: '1',
    title: 'Completar atomicDesign',
    completed: true
  },
  {
    id: '2',
    title: 'Cambiar fecha de cita',
    completed: false
  },
  {
    id: '3',
    title: 'Comprar Adidas',
    completed: false
  },
  {
    id: '4',
    title: 'Daily',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='app-container'>
    <Header/>
    <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo={handleRemove}
      todos={todos}
    />
    </div>
  )
}

export default App
