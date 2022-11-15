import { initialState } from './appContext'

export default function reducer(state, action) {
  switch (action.type) {
    case 'display_alert': {
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values'
      }
    }
    case 'clear_alert': {
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: ''
      }
    }
    case 'setup_user_begin': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'setup_user_success': {
      const { user, token, location, alertText } = action.payload
      return {
        ...state,
        user: user,
        token: token,
        userLocation: location,
        drinkLocation: location,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: alertText
      }
    }
    case 'setup_user_error': {
      const { msg } = action.payload
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: msg
      }
    }
    case 'toggle_sidebar': {
      return {
        ...state,
        showSidebar: !state.showSidebar
      }
    }
    case 'logout_user': {
      return {
        ...initialState,
        user: null,
        token: null,
        userLocation: null,
        drinkLocation: null
      }
    }
    case 'update_user_begin': {
      return {
        ...initialState,
        isLoading: true
      }
    }
    case 'update_user_success': {
      return {
        ...initialState,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        drinkLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: 'user profile updated'
      }
    }
    case 'update_user_error': {
      return {
        ...initialState,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg
      }
    }
    case 'handle_change': {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    }
    case 'clear_values': {
      const initialState = {
        isEditing: false,
        editDrinkId: '',
        drinkName: '',
        drinkType: '',
        drinkLocation: state.userLocation || '',
        breweryName: '',
        thoughts: '',
        drinkRating: 1
      }

      return { ...state, ...initialState }
    }
    case 'create_drink_begin': {
      return { ...state, isLoading: true }
    }
    case 'create_drink_success': {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'new drink added'
      }
    }
    case 'create_drink_error': {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg
      }
    }
    case 'get_drinks_begin': {
      return {
        ...state,
        isLoading: true,
        showAlert: false
      }
    }
    case 'get_drinks_success': {
      return {
        ...state,
        isLoading: false,
        drinks: action.payload.drinks,
        totalDrinks: action.payload.totalDrinks
      }
    }
    default: {
      throw new Error(`no such action: ${action.type}`)
    }
  }
}
