import { experimental_extendTheme as extendTheme, CssVarsThemeOptions, Theme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '54px'
const BOARD_BAR_HEIGHT = '50px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT} )`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

export interface CustomCssVarsThemeOptions extends CssVarsThemeOptions {
  trello: {
    appBarHeight: string
    boardBarHeight: string
    boardContentHeight: string
    columnHeaderHeight: string
    columnFooterHeight: string
  }
}

export interface CustomTheme extends Theme {
  trello: {
    appBarHeight: string
    boardBarHeight: string
    boardContentHeight: string
    columnHeaderHeight: string
    columnFooterHeight: string
  }
}

export const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
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
} as CustomCssVarsThemeOptions )
