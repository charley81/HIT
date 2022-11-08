import { useReducer } from 'react'

export default function reducer(state, action) {
  throw new Error(`no such action: ${action.type}`)
}
