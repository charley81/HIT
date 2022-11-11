import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  token: null,
  userLocation: ''
}

// setup context => returns a provider and a consumer
const AppContext = createContext()

// get children so that you can wrap them with this provider
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function displayAlert() {
    dispatch({ type: 'display_alert' })
    clearAlert()
  }

  function clearAlert() {
    setTimeout(() => {
      dispatch({ type: 'clear_alert' })
    }, 2000)
  }

  async function registerUser(currentUser) {
    console.log(currentUser)
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook so you don't have to use useContext in every component and then pass in the appContext
export function useAppContext() {
  return useContext(AppContext)
}
