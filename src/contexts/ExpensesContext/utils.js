import { v4 } from 'uuid'

export const generateId = () => v4()

export function updateExpenses(expenses, tableId, items) {
  const totalExpense = getTotalTableExpense(items)

  return expenses.map((table) => {
    if (table.id !== tableId) return table

    return { ...table, items, totalExpense }
  })
}

function getTotalTableExpense(items) {
  const totalPrice = items.reduce((total, item) => {
    return total + item.price
  }, 0)

  return Number(totalPrice.toFixed(2))
}
