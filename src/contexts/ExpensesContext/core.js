import { generateId, updateExpenses } from './utils'

/////////// table functions ///////////
export function getTableById(expenses, tableId) {
  const index = expenses.findIndex((item) => item.id === tableId)
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

export function duplicateTable(expenses, tableId) {
  const index = expenses.findIndex((table) => table.id === tableId)
  const table = getTableById(expenses, tableId)

  const tablesFromStart = expenses.slice(0, index + 1)
  const tablesFromEnd = expenses.slice(index + 1, expenses.length)

  const data = [
    ...tablesFromStart,
    { ...table, id: generateId() },
    ...tablesFromEnd,
  ]

  console.log(data)

  return data
}

export function deleteTable(expenses, tableId) {
  return expenses.filter((item) => item.id !== tableId)
}

/////////// expenses functions ///////////
export function addExpense(expenses, tableId, { name, price, date }) {
  const table = getTableById(expenses, tableId)

  const items = [
    ...table.items,
    {
      date,
      name,
      price: Number(price),
      id: generateId(),
    },
  ]

  const data = updateExpenses(expenses, tableId, items)

  return data
}

export function editExpense(expenses, tableId, { name, price, date, id }) {
  const table = getTableById(expenses, tableId)
  const originalItems = table.items

  const items = originalItems.map((item) => {
    if (item.id !== id) return item
    return { name, price, date, id }
  })

  const data = updateExpenses(expenses, tableId, items)

  return data
}

export function duplicateExpense(expenses, tableId, itemId) {
  const table = getTableById(expenses, tableId)
  const index = table.items.findIndex((item) => item.id === itemId)
  const item = table.items.filter((item) => item.id === itemId)

  const itemsFromStart = table.items.slice(0, index + 1)
  const itemsFromEnd = table.items.slice(index + 1, table.items.length)

  const items = [
    ...itemsFromStart,
    { ...item[0], id: generateId() },
    ...itemsFromEnd,
  ]

  const data = updateExpenses(expenses, tableId, items)

  return data
}

export function deleteExpense(expenses, tableId, itemId) {
  const table = getTableById(expenses, tableId)
  const items = table.items.filter((item) => item.id !== itemId)

  const data = updateExpenses(expenses, tableId, items)

  return data
}
