import { useEffect, useState } from 'react'
import { useExpenses } from '../../../../contexts/ExpensesContext'
import { Form as FormWrapper } from '../../../../components'

export function Form({ tableId: id }) {
  const [item, setItem] = useState({ name: '', price: '' })
  const { addItem } = useExpenses()

  useEffect(() => {
    setItem({ name: '', price: '' })
  }, [id])

  return (
    <FormWrapper onSubmit={() => addItem(id, item)}>
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
