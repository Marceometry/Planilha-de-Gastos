import * as S from '../styles'

export function Cell({ isChangeable = true, children }) {
  return (
    <S.Cell isChangeable={isChangeable}>
      {isChangeable ? <S.Input type='text' value={children} /> : children}
    </S.Cell>
  )
}
