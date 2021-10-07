import { StyledButton, IconButton } from './styles'

export function Button(props) {
  const { children, withIcon } = props

  if (withIcon) {
    const { label, iconSize = '1.5rem' } = props

    return (
      <IconButton title={label} size={iconSize} {...props}>
        {children}
      </IconButton>
    )
  }

  return <StyledButton {...props}>{children}</StyledButton>
}
