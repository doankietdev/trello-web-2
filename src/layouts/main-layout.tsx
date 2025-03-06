import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeSelect } from '~/components'
import { CustomTheme } from '~/theme'

interface MainLayoutProps {
  children?: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
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

      <Box>
        {children}
        <Outlet />
      </Box>
    </Container>
  )
}
