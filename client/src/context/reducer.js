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
    default: {
      throw new Error(`no such action: ${action.type}`)
    }
  }
}
