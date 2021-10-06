import { createContext, useContext, useEffect, useState } from 'react'
import { initialData } from './utils'
import {
  getTableById as getTableCallback,
  addTable as addTableCallback,
  deleteTable as deleteTableCallback,
  addItem as addItemCallback,
  editExpense as editExpenseCallback,
  deleteExpense as deleteExpenseCallback,
} from './core'

export const ExpensesContext = createContext({})

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    const storedData = localStorage.getItem('expenses')
    return JSON.parse(storedData) || initialData
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  function getTableById(tableId) {
    return getTableCallback(expenses, tableId)
  }

  function addTable(name) {
    const { data, id } = addTableCallback(expenses, name)
    setExpenses(data)
    return id
  }

  function deleteTable(id) {
    const data = deleteTableCallback(expenses, id)
    setExpenses(data)
  }

  function addItem(tableId, { name, price }) {
    const data = addItemCallback(expenses, tableId, { name, price })
    setExpenses(data)
  }

  function editExpense(tableId, { name, price, id }) {
    const data = editExpenseCallback(expenses, tableId, { name, price, id })
    setExpenses(data)
  }

  function deleteExpense(tableId, itemId) {
    const data = deleteExpenseCallback(expenses, tableId, itemId)
    setExpenses(data)
  }

  function getTotalExpense() {
    return expenses.reduce((totalExpense, item) => {
      return totalExpense + item.totalExpense
    }, 0)
  }

  function getTotalItems() {
    return expenses.reduce((totalItems, item) => {
      return totalItems + item.items.length
    }, 0)
  }

  function getFormattedPrice(price) {
    return `R$ ${price}`
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        getTableById,
        addTable,
        deleteTable,
        addItem,
        editExpense,
        deleteExpense,
        getFormattedPrice,
        getTotalExpense,
        getTotalItems,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
