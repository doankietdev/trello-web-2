import { Link } from 'react-router-dom'

interface ErrorPageProps {
  code: number
  message: string
  backButtonText: string
  backTo: string
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  code,
  message,
  backButtonText,
  backTo
}) => {
  return (
    <>
      <p>{code}</p>
      <p>{message}</p>
      <Link to={backTo}>{backButtonText}</Link>
    </>
  )
}

export default ErrorPage
