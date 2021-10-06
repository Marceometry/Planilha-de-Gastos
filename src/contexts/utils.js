import { v4 } from 'uuid'

export const generateId = () => v4()

export function addTable(expenses, name) {
  const id = generateId()

  const data = {
    ...expenses,
    [id]: {
      id,
      name,
      items: [],
      totalExpense: 0,
    },
  }

  return { data, id }
}

export function addItem(expenses, tableId, { name, price }) {
  if (!tableId || !name || !price) return

  const priceStringToNumber = Number(price)

  const items = [
    ...expenses[tableId].items,
    {
      name,
      price: priceStringToNumber,
      id: generateId(),
    },
  ]

  const totalExpense = getTotalPrice(items)

  return {
    ...expenses,
    [tableId]: {
      ...expenses[tableId],
      totalExpense,
      items,
    },
  }
}

export function editExpense(expenses, tableId, { name, price, id }) {
  const items = expenses[tableId].items

  const editedArray = items.map((item) => {
    if (item.id !== id) return item

    return { name, price, id }
  })

  const totalExpense = getTotalPrice(items)

  return {
    ...expenses,
    [tableId]: {
      ...expenses[tableId],
      items: [...editedArray],
      totalExpense,
    },
  }
}

export function deleteExpense(expenses, tableId, itemId) {
  const items = expenses[tableId].items.filter((item) => item.id !== itemId)

  const totalExpense = getTotalPrice(items)

  return {
    ...expenses,
    [tableId]: {
      ...expenses[tableId],
      items: [...items],
      totalExpense,
    },
  }
}

export function getTotalPrice(items) {
  const totalPrice = items.reduce((total, item) => {
    return total + item.price
  }, 0)
  return totalPrice.toFixed(2)
}

// export function findIndexOfTableById(id, expenses) {
//   if (!id || expenses.length === 0) return

//   return expenses.findIndex((item) => item.id !== id)
// }

export const initialData = {
  1: {
    id: '1',
    name: 'Mensal',
    items: [
      { name: 'Produto 1', price: 1.9, id: 0 },
      { name: 'Produto 2', price: 2, id: 1 },
      { name: 'Produto 3', price: 3.3, id: 2 },
      { name: 'Produto 4', price: 12, id: 3 },
      { name: 'Produto 5', price: 7, id: 4 },
    ],
    totalExpense: 26.2,
  },
  2: {
    id: '2',
    name: 'Unitário',
    items: [
      { name: 'Produto 1', price: 10, id: 0 },
      { name: 'Produto 3', price: 3, id: 1 },
      { name: 'Produto 5', price: 76, id: 2 },
      { name: 'Produto 4', price: 7.4, id: 3 },
      { name: 'Produto 3', price: 99.5, id: 4 },
    ],
    totalExpense: 0,
  },
}
