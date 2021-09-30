export const themes = {
  light: {
    fontColor: '#111',
    backgroundColor: '#eee',
  },
  dark: {
    fontColor: '#eee',
    backgroundColor: '#333',
  },
}

export function ToggleTheme(theme, callback) {
  callback(theme === 'light' ? 'dark' : 'light')
}
