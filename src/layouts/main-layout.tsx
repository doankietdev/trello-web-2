import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar } from './components'

interface MainLayoutProps {
  children?: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />

      <Box>
        {children}
        <Outlet />
      </Box>
    </Container>
  )
}
