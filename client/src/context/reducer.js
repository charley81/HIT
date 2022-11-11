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
    case 'register_user_begin': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'register_user_success': {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        drinkLocation: action.payload.location,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'you have been successfully registered'
      }
    }
    case 'register_user_error': {
      return {
        ...state,
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
