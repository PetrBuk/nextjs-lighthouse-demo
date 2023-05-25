import React, { useEffect, useState } from 'react'

import Tabs from '@project/components/ui/Tabs'
import CrossIcon from '@project/components/ui/icons/CrossIcon'
import { Tab, Todo } from '@project/types/types'

const tabs: Tab[] = [
  {
    title: 'all',
    content: '',
  },
  {
    title: 'todo',
    content: '',
  },
  {
    title: 'done',
    content: '',
  },
]

const Todos = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>()
  const [todo, setTodo] = useState('')
  const [filter, setFilter] = useState<'all' | 'done' | 'todo'>('all')

  useEffect(() => {
    const fetchTodos = async () => {
      const resp = await fetch('https://dummyjson.com/todos?skip=0&limit=10')
      const todos = await resp.json()
      setTodos(todos.todos)
    }
    fetchTodos()
  }, [])

  const handleDelete = (id: number) => {
    if (todos) {
      const newList = todos.filter((todo) => todo.id !== id)
      setTodos(newList)
    }
  }

  const handleAdd = async () => {
    if (todo.length) {
      const resp = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo,
          completed: filter === 'done' ? true : false,
          userId: 5,
        }),
      })
      const data = await resp.json()
      const saveData = { ...data, id: Math.random() }
      if (todos) {
        setTodos([saveData, ...todos])
      } else {
        setTodos([saveData])
      }
      setTodo('')
    }
  }

  const handleTodoChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo(e.target.value)
  }

  const handleFilterChange = (tab: Tab) => {
    setFilter(tab.title as 'all')
  }

  const getFilteredItems = () => {
    if (todos) {
      switch (filter) {
        case 'all':
          return [...todos]
        case 'done':
          return todos.filter((todo) => todo.completed)
        case 'todo':
          return todos.filter((todo) => !todo.completed)
        default:
          return []
      }
    } else return []
  }

  if (!todos) {
    return (
      <div role="status" className="max-w-sm animate-pulse">
        <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <span className="sr-only">Načítám...</span>
      </div>
    )
  }

  return (
    <div className="mt-4 flex w-full flex-col gap-4">
      <Tabs tabs={tabs} handleSelect={handleFilterChange} />
      <ul className="w-full rounded-t-none border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        <li className="flex w-full justify-between gap-2 rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Přidat nové ToDo"
            value={todo}
            onChange={handleTodoChange}
          />
          <button
            type="button"
            className="rounded-lg bg-transparent px-4 py-1 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleAdd}
          >
            Přidat
          </button>
        </li>
        {getFilteredItems().map((todo) => (
          <li
            key={todo.id}
            className="flex w-full justify-between rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600"
          >
            {todo.todo}
            <button
              type="button"
              className="rounded-lg bg-transparent text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleDelete(todo.id)}
            >
              <CrossIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
