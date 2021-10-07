import { createContext, useContext, useEffect, useState } from 'react'
import {
  getTableById as getTableCallback,
  addTable as addTableCallback,
  editTableName as editTableNameCallback,
  duplicateTable as duplicateTableCallback,
  deleteTable as deleteTableCallback,
  addExpense as addExpenseCallback,
  editExpense as editExpenseCallback,
  duplicateExpense as duplicateExpenseCallback,
  deleteExpense as deleteExpenseCallback,
} from './core'

export const ExpensesContext = createContext({})

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    const storedData = localStorage.getItem('expenses')
    return JSON.parse(storedData) || []
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

  function editTableName(tableId, name) {
    const data = editTableNameCallback(expenses, tableId, name)
    setExpenses(data)
  }

  function duplicateTable(tableId) {
    const data = duplicateTableCallback(expenses, tableId)
    setExpenses(data)
  }

  function deleteTable(id) {
    const data = deleteTableCallback(expenses, id)
    setExpenses(data)
  }

  function addExpense(tableId, item) {
    const data = addExpenseCallback(expenses, tableId, item)
    setExpenses(data)
  }

  function editExpense(tableId, item) {
    const data = editExpenseCallback(expenses, tableId, item)
    setExpenses(data)
  }

  function duplicateExpense(tableId, itemId) {
    const data = duplicateExpenseCallback(expenses, tableId, itemId)
    setExpenses(data)
  }

  function deleteExpense(tableId, itemId) {
    const data = deleteExpenseCallback(expenses, tableId, itemId)
    setExpenses(data)
  }

  function getTotalExpense() {
    const totalExpense = expenses.reduce((totalExpense, item) => {
      return totalExpense + item.totalExpense
    }, 0)

    return Number(totalExpense.toFixed(2))
  }

  function getTotalItems() {
    return expenses.reduce((totalItems, item) => {
      return totalItems + item.items.length
    }, 0)
  }

  function getFormattedPrice(price) {
    return `R$ ${price}`
  }

  const providerValue = {
    expenses,
    getTableById,
    addTable,
    editTableName,
    duplicateTable,
    deleteTable,
    addExpense,
    editExpense,
    duplicateExpense,
    deleteExpense,
    getFormattedPrice,
    getTotalExpense,
    getTotalItems,
  }

  return (
    <ExpensesContext.Provider value={providerValue}>
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
