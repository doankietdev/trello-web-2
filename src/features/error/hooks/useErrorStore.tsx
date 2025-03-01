import { useSelector } from 'react-redux'
import { errorActions, errorSelector } from '../slices/error-slice'

export const useErrorStore = () => {
  const error = useSelector(errorSelector.getValue)

  return {
    ...errorActions,
    error
  }
}
