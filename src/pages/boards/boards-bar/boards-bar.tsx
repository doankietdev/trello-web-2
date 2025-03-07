import Box from '@mui/material/Box'
import { CustomTheme } from '~/theme'

export const BoardsBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.dark',
        height: (theme) => (theme as CustomTheme).trello.boardBarHeight
      }}
    >
      Board bar
    </Box>
  )
}
