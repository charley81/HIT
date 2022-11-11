import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
import axios from 'axios'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  token: null,
  userLocation: '',
  drinkLocation: ''
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
    dispatch({ type: 'register_user_begin' })
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser)
      console.log(response)
      const { user, token, location } = response.data
      dispatch({
        type: 'register_user_success',
        payload: {
          user,
          token,
          location
        }
      })
      // TODO: local storage setup
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'register_user_error',
        payload: { msg: error.response.data.msg }
      })
    }
    clearAlert()
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
