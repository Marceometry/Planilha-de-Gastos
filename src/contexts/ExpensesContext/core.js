import {
  generateId,
  getIndexOfTable,
  getTotalPrice,
  updateExpenses,
} from './utils'

export function getTableById(expenses, tableId) {
  const index = getIndexOfTable(expenses, tableId)
  return expenses[index]
}

export function addTable(expenses, name) {
  const id = generateId()

  const data = [
    ...expenses,
    {
      id,
      name,
      items: [],
      totalExpense: 0,
    },
  ]

  return { data, id }
}

export function editTableName(expenses, tableId, name) {
  const data = expenses.map((item) => {
    if (item.id !== tableId) return item
    return { ...item, name: name }
  })

  return data
}

export function deleteTable(expenses, tableId) {
  return expenses.filter((item) => item.id !== tableId)
}

export function addItem(expenses, tableId, { name, price }) {
  const index = getIndexOfTable(expenses, tableId)

  const items = [
    ...expenses[index].items,
    {
      name,
      price: Number(price),
      id: generateId(),
    },
  ]

  const totalExpense = getTotalPrice(items)

  const data = updateExpenses(expenses, tableId, items, totalExpense)

  return data
}

export function editExpense(expenses, tableId, { name, price, id }) {
  const index = getIndexOfTable(expenses, tableId)
  const originalItems = expenses[index].items

  const items = originalItems.map((item) => {
    if (item.id !== id) return item
    return { name, price, id }
  })

  const totalExpense = getTotalPrice(items)

  const data = updateExpenses(expenses, tableId, items, totalExpense)

  return data
}

export function deleteExpense(expenses, tableId, itemId) {
  const index = getIndexOfTable(expenses, tableId)
  const items = expenses[index].items.filter((item) => item.id !== itemId)

  const totalExpense = getTotalPrice(items)

  const data = updateExpenses(expenses, tableId, items, totalExpense)

  return data
}
