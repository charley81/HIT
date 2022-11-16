import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
import axios from 'axios'

//  set up user as soon as application loads...grab these items from local storage on initial load
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

// initial state
export const initialState = {
  // user
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  showSidebar: false,

  // drinks
  drinks: [],
  totalDrinks: 0,
  page: 1,
  numOfPages: 1,
  isEditing: false,
  editDrinkId: '',
  drinkName: '',
  drinkType: '',
  drinkLocation: userLocation || '',
  breweryName: '',
  thoughts: '',
  drinkRating: 1,

  // sort
  sortOptions: ['a-z', 'z-a', 'high-to-low', 'low-to-high']
}

// setup context => returns a provider and a consumer
const AppContext = createContext()

// get children so that you can wrap them with this provider
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // setup base url and headers so that you don't have to write these on every request
  const authFetch = axios.create({
    baseURL: '/api/v1'
  })

  // https://axios-http.com/docs/interceptors
  // axios interceptors are basically middleware for axios they allow you to add functionality as the request leave and as they come back
  // axios interceptors gives us a way to handle 401 response (authentication errors) programmatically

  // request interceptor => handles setting the bearer token for each request
  authFetch.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${state.token}`
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // response interceptor => will use to handle errors
  authFetch.interceptors.response.use(
    response => {
      return response
    },
    error => {
      // status code 401 = unauthorized
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )

  // display alert
  function displayAlert() {
    dispatch({ type: 'display_alert' })
    clearAlert()
  }

  // clear alert
  function clearAlert() {
    setTimeout(() => {
      dispatch({ type: 'clear_alert' })
    }, 2000)
  }

  // setup user
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

  // update user
  async function updateUser(currentUser) {
    dispatch({ type: 'update_user_begin' })
    try {
      const { data } = await authFetch.patch('auth/updateUser', currentUser)

      const { user, token, location } = data

      dispatch({
        type: 'update_user_success',
        payload: { user, token, location }
      })

      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: 'update_user_error',
          payload: { msg: error.response.data.msg }
        })
      }
    }
    clearAlert()
  }

  // toggle sidebar
  function toggleSidebar() {
    dispatch({ type: 'toggle_sidebar' })
  }

  // logout user
  function logoutUser() {
    dispatch({ type: 'logout_user' })
    removeUserFromLocalStorage()
  }

  // add user to local storage
  function addUserToLocalStorage(user, token, location) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  }

  // remove user from local storage
  function removeUserFromLocalStorage() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
  }

  // handle add/edit form input change
  function handleChange({ name, value }) {
    dispatch({
      type: 'handle_change',
      payload: { name, value }
    })
  }

  // clear add/edit from input values
  function clearValues() {
    dispatch({ type: 'clear_values' })
  }

  // create drink
  async function createDrink() {
    dispatch({ type: 'create_drink_begin' })

    try {
      const {
        drinkName,
        drinkLocation,
        drinkRating,
        drinkType,
        breweryName,
        thoughts
      } = state

      await authFetch.post('/drinks', {
        drinkLocation,
        drinkName,
        drinkRating,
        drinkType,
        breweryName,
        thoughts
      })

      dispatch({ type: 'create_drink_success' })
      dispatch({ type: 'clear_values' })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: 'create_drink_error',
        payload: { msg: error.response.data.msg }
      })
    }
    clearAlert()
  }

  // get all drinks
  async function getDrinks() {
    let url = '/drinks'

    dispatch({ type: 'get_drinks_begin' })

    try {
      const { data } = await authFetch(url)
      const { drinks, totalDrinks, numOfPages } = data
      dispatch({
        type: 'get_drinks_success',
        payload: { drinks, totalDrinks, numOfPages }
      })
    } catch (error) {
      console.log(error.response)
      // logoutUser()
    }
    clearAlert()
  }

  // set edit drink
  function setEditDrink(id) {
    dispatch({
      type: 'set_edit_drink',
      payload: { id }
    })
  }

  // edit drink
  async function editDrink(drinkId) {
    dispatch({ type: 'edit_drink_begin' })

    try {
      const {
        drinkLocation,
        drinkName,
        drinkRating,
        drinkType,
        breweryName,
        thoughts,
        editDrinkId
      } = state
      await authFetch.patch(`/drinks/${editDrinkId}`, {
        drinkLocation,
        drinkName,
        drinkRating,
        drinkType,
        breweryName,
        thoughts
      })
      dispatch({ type: 'edit_drink_success' })
      dispatch({ type: 'clear_values' })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: 'edit_drink_error',
        payload: { msg: error.response.data.msg }
      })
    }
    clearAlert()
  }

  // delete drink
  async function deleteDrink(drinkId) {
    dispatch({ type: 'delete_drink_begin' })

    try {
      await authFetch.delete(`/drinks/${drinkId}`)
      // make request to get latest drinks after delete
      getDrinks()
    } catch (error) {
      // logoutUser()
    }
  }

  // show info
  async function showInfo() {
    dispatch({ type: 'show_info_begin' })

    try {
      const { data } = await authFetch('/drinks/info')
      dispatch({
        type: 'show_info_success',
        payload: {
          monthlyDrinks: data.monthlyDrinks
        }
      })
    } catch (error) {
      logoutUser()
    }
    clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createDrink,
        getDrinks,
        setEditDrink,
        deleteDrink,
        editDrink,
        showInfo
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
