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
    default: {
      throw new Error(`no such action: ${action.type}`)
    }
  }
}
