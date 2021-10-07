import { v4 } from 'uuid'

export const generateId = () => v4()

export function getIndexOfTable(expenses, id) {
  return expenses.findIndex((item) => item.id === id)
}

export function updateExpenses(expenses, tableId, items, totalExpense) {
  return expenses.map((item) => {
    if (item.id !== tableId) return item

    return { ...item, items, totalExpense }
  })
}

export function getTotalPrice(items) {
  const totalPrice = items.reduce((total, item) => {
    return total + item.price
  }, 0)

  return Number(totalPrice.toFixed(2))
}
