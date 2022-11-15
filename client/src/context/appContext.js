import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
import axios from 'axios'

//  set up user as soon as application loads...grab these items from local storage on initial load
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  drinkLocation: userLocation || '',
  showSidebar: false
}

// setup context => returns a provider and a consumer
const AppContext = createContext()

// get children so that you can wrap them with this provider
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // setup base url and headers so that you don't have to write these on every request
  const authFetch = axios.create({
    baseURL: '/api/v1',
    headers: {
      Authorization: `Bearer ${state.token}`
    }
  })

  function displayAlert() {
    dispatch({ type: 'display_alert' })
    clearAlert()
  }

  function clearAlert() {
    setTimeout(() => {
      dispatch({ type: 'clear_alert' })
    }, 2000)
  }

  async function setupUser({ currentUser, endPoint, alertText }) {
    dispatch({ type: 'setup_user_begin' })

    try {
      const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
      const { user, token, location } = data

      dispatch({
        type: 'setup_user_success',
        payload: { user, token, location, alertText }
      })
      addUserToLocalStorage(user, token, location)
    } catch (error) {
      dispatch({
        type: 'setup_user_error',
        payload: { msg: error.response.data.msg }
      })
    }
    clearAlert()
  }

  async function updateUser(currentUser) {
    try {
      const { data } = await authFetch.patch('auth/updateUser', currentUser)
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  function toggleSidebar() {
    dispatch({ type: 'toggle_sidebar' })
  }

  function logoutUser() {
    dispatch({ type: 'logout_user' })
    removeUserFromLocalStorage()
  }

  function addUserToLocalStorage(user, token, location) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  }

  function removeUserFromLocalStorage() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook so you don't have to use useContext in every component and then pass in the appContext
export function useAppContext() {
  return useContext(AppContext)
}
