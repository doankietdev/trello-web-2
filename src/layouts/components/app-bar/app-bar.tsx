import Box from '@mui/material/Box'
import { ThemeSelect } from '~/components'
import { CustomTheme } from '~/theme'

export const AppBar: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        height: (theme) => (theme as CustomTheme).trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ThemeSelect />
    </Box>
  )
}
