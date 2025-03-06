import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { LoadingSpinner } from '~/components'
import { MainLayout } from '~/layouts'
import { PATHS } from './paths'

// Pages
const ErrorPage = lazy(() => import('~/pages/error'))
const Boards = lazy(() => import('~/pages/boards'))

export const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    {
      path: PATHS.HOME,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Boards />
        },
        {
          path: '*',
          element: (
            <ErrorPage
              code={404}
              message="Page Not Found"
              backButtonText="Back to home page"
              backTo={PATHS.HOME}
            />
          )
        }
      ]
    }
  ])

  return (
    <Suspense
      fallback={
        <MainLayout>
          <LoadingSpinner />
        </MainLayout>
      }
    >
      {routes}
    </Suspense>
  )
}
