import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const { user } = useAppContext()

  if (!user) {
    return <Navigate to="/intro" />
  }
  return children
}
