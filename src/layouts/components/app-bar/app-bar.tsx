import AppsIcon from '@mui/icons-material/Apps'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import TrelloIcon from '~/assets/svgs/trello.svg?react'
import { ThemeSelect } from '~/components'
import { CustomTheme } from '~/theme'
import { Menus } from './menus/menus';

export const AppBar: React.FC = () => {
  return (
    <Box
      px={2}
      sx={{
        backgroundColor: 'primary.light',
        height: (theme) => (theme as CustomTheme).trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            sx={{ color: 'primary.main' }}
            inheritViewBox
          />
          <Typography
            component="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Trello
          </Typography>
          <Menus />
        </Box>
      </Box>

      <ThemeSelect />
    </Box>
  )
}
