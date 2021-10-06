import { Button } from '../../../..'
import * as S from '../styles'

export function Cell(props) {
  const {
    children,
    strong,
    isChangeable,
    onChange,
    asNumber,
    asButton,
    onClick,
  } = props

  return (
    <S.Cell isChangeable={isChangeable} asButton={asButton}>
      {asButton && (
        <Button outlined onClick={onClick} style={{ fontSize: '14px' }}>
          {children}
        </Button>
      )}

      {isChangeable && (
        <S.Input
          type={`${asNumber ? 'number' : 'text'}`}
          value={children}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {strong && <strong>{children}</strong>}

      {!asButton && !isChangeable && !strong && children}
    </S.Cell>
  )
}
