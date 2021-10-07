import { Button } from '../../../..'
import * as S from '../styles'

export function Cell(props) {
  const { children, strong, isChangeable, onChange, asNumber, withIcons } =
    props

  return (
    <S.Cell isChangeable={isChangeable}>
      {withIcons && (
        <S.IconsWrapper>
          {withIcons?.map((props) => (
            <Button withIcon key={props.title} {...props}>
              {props.icon}
            </Button>
          ))}
        </S.IconsWrapper>
      )}

      {isChangeable && (
        <S.Input
          type={`${asNumber ? 'number' : 'text'}`}
          value={children}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {strong && <strong>{children}</strong>}

      {!withIcons && !isChangeable && !strong && children}
    </S.Cell>
  )
}
