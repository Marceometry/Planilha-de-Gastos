import { createContext, useContext, useEffect, useState } from 'react'

export const ExpensesContext = createContext({})

export function ExpensesProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0)
  const [expenses, setExpenses] = useState([
    { name: 'Produto 1', price: 1.9, id: 0 },
    { name: 'Produto 2', price: 2, id: 1 },
    { name: 'Produto 3', price: 3.3, id: 2 },
    { name: 'Produto 4', price: 12, id: 3 },
    { name: 'Produto 5', price: 7, id: 4 },
  ])

  useEffect(() => {
    getTotalPrice(expenses)
  }, [expenses])

  function AddItem(name, price) {
    if (!name || !price) return

    setExpenses([
      ...expenses,
      {
        name,
        price,
        id: expenses.length,
      },
    ])
  }

  function editExpense({ name, price, id }) {
    let array = [...expenses]
    let item = array[id]

    array[id] = {
      name: name || item.name,
      price: price > 0 ? price : item.price,
      id: item.id,
    }

    setExpenses([...array])
  }

  function deleteExpense(id) {
    const array = expenses.filter((item) => item.id !== id)
    setExpenses([...array])
  }

  function getTotalPrice(items) {
    const totalPrice = items.reduce((total, item) => {
      return total + item.price
    }, 0)
    setTotalPrice(totalPrice.toFixed(2))
  }

  function getFormattedPrice(price) {
    return `R$ ${price}`
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        AddItem,
        editExpense,
        deleteExpense,
        totalPrice,
        getFormattedPrice,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpenses = () => useContext(ExpensesContext)
