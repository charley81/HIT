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
    default: {
      throw new Error(`no such action: ${action.type}`)
    }
  }
}
