import { useState } from 'react'
import { useHistory } from 'react-router'
import { useExpenses } from '../../../../contexts/ExpensesContext'
import { Form as FormWrapper } from '../../../../components'

export function Form() {
  const [tableName, setTableName] = useState('')
  const { addTable } = useExpenses()
  const history = useHistory()

  function createTable(tableName) {
    setTableName('')
    const tableId = addTable(tableName)
    history.push(`/tables/${tableId}`)
  }

  return (
    <FormWrapper onSubmit={() => createTable(tableName)}>
      <input
        type='text'
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
        placeholder='Nome da Tabela'
      />
    </FormWrapper>
  )
}
