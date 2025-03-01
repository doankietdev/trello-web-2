import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  children?: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="">
      {children}
      <Outlet />
    </main>
  )
}
