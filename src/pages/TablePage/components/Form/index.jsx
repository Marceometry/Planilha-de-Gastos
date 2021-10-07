import { useEffect, useState } from 'react'
import { useExpenses } from '../../../../contexts'
import { Form as FormWrapper } from '../../../../components'

export function Form({ tableId: id }) {
  const [item, setItem] = useState({ name: '', price: '' })
  const { addExpense } = useExpenses()

  useEffect(() => {
    setItem({ name: '', price: '' })
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
    </FormWrapper>
  )
}
