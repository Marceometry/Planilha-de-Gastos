import * as S from './styles'

export function ErrorMessage({ children }) {
  return (
    <S.Wrapper>
      <h1>{children}</h1>
    </S.Wrapper>
  )
}
