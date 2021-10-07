import { MdAdd } from 'react-icons/md'
import { Button } from '../../'
import * as S from './styles'

export function Form({ children, onSubmit }) {
  return (
    <S.Wrapper>
      <S.Inputs>{children}</S.Inputs>

      <Button outlined iconWithBackground onClick={onSubmit}>
        <MdAdd />
      </Button>
    </S.Wrapper>
  )
}
