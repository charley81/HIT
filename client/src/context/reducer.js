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
    default: {
      throw new Error(`no such action: ${action.type}`)
    }
  }
}
