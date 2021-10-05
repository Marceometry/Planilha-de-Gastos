import { useState } from 'react'
import { Button } from '..'
import { useExpenses } from '../../contexts/ExpensesContext'
import * as S from './styles'

export function AddItem() {
  const [item, setItem] = useState({ name: '', price: '' })
  const { AddItem } = useExpenses()

  return (
    <S.Wrapper>
      <S.Input
        type='text'
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        placeholder='Nome do item'
      />

      <S.Input
        type='number'
        value={item.price}
        onChange={(e) => setItem({ ...item, price: e.target.value })}
        placeholder='Preço do item'
      />

      <Button outlined onClick={() => AddItem(item.name, Number(item.price))}>
        Adicionar
      </Button>
    </S.Wrapper>
  )
}
