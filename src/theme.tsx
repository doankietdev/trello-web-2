import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#0B4DA9' },
        secondary: { main: '#f50057' },
        text: { secondary: '#FFFFFF' },
        background: { default: '#F1F2F4', paper: '#FFFFFF' },
        error: { main: '#f50057' }
      }
    },
    dark: {
      palette: {
        primary: { main: '#2c3e50' },
        secondary: { main: '#f50057' },
        text: { secondary: '#FFFFFF' },
        background: { default: '#0e1217', paper: '#1c1f26' },
        error: { main: '#f50057' }
      }
    }
  }
})
