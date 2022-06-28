import { useEffect, useState } from 'react'
import { useExpenses } from '../../../../contexts'
import { Form as FormWrapper } from '../../../../components'

export function Form({ tableId: id }) {
  const [item, setItem] = useState({ name: '', price: '', date: '' })
  const { addExpense } = useExpenses()

  useEffect(() => {
    setItem({ name: '', price: '', date: '' })
  }, [id])

  return (
    <FormWrapper onSubmit={() => addExpense(id, item)}>
      <input
        type='text'
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        placeholder='Nome do item'
      />

      <input
        type='number'
        value={item.price}
        onChange={(e) => setItem({ ...item, price: e.target.value })}
        placeholder='Preço do item'
      />

      <input
        type='text'
        value={item.date}
        onChange={(e) => setItem({ ...item, date: e.target.value })}
        placeholder='Data de compra'
      />
    </FormWrapper>
  )
}
