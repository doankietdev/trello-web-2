import { lazy, ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from '~/hooks/use-app-dispatch'
import { useErrorStore } from '../hooks/useErrorStore'

const ErrorPage = lazy(() => import('~/pages/error/error'))

interface ErrorBoundaryProps {
  children: ReactNode
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const { error, resetError } = useErrorStore()

  useEffect(() => {
    dispatch(resetError())
  }, [dispatch, location.pathname, resetError])

  if (error === 'not_found') {
    return (
      <ErrorPage
        code={404}
        message="Page Not Found"
        backButtonText="Back to Home page"
        backTo="/"
      />
    )
  }

  return children
}
