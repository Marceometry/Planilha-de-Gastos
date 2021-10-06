import { createContext, useContext, useState } from 'react'
import {
  initialData,
  addItem as addItemCallback,
  editExpense as editExpenseCallback,
  deleteExpense as deleteExpenseCallback,
} from './utils'

export const ExpensesContext = createContext({})

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState(initialData)

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

  function getFormattedPrice(price) {
    return `R$ ${price}`
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addItem,
        editExpense,
        deleteExpense,
        getFormattedPrice,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)