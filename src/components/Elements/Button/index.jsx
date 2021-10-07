import { StyledButton, IconButton, IconButtonWithBackground } from './styles'

export function Button(props) {
  const { children, withIcon, iconWithBackground, iconSize = '1.5rem' } = props

  if (withIcon) {
    return (
      <IconButton size={iconSize} {...props}>
        {children}
      </IconButton>
    )
  }

  if (iconWithBackground) {
    return (
      <IconButtonWithBackground size={iconSize} {...props}>
        {children}
      </IconButtonWithBackground>
    )
  }

  return <StyledButton {...props}>{children}</StyledButton>
}
