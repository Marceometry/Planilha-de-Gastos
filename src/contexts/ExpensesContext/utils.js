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

export const initialData = [
  {
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
  {
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
]
