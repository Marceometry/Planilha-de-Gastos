import { Button } from '..'
import * as S from './styles'

export function Form({ children, onSubmit }) {
  return (
    <S.Wrapper>
      <S.Inputs>{children}</S.Inputs>

      <Button outlined onClick={onSubmit}>
        Adicionar
      </Button>
    </S.Wrapper>
  )
}
