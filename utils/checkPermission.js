import { UnAuthenticatedError } from '../errors/index.js'

// check if user is authenticated to access route, if not throw error

// requestUser => entire user obj
// resourceUserId => drinkId
export default function checkPermissions(requestUser, resourceUserId) {
  if (requestUser.userId === resourceUserId.toString()) return
  throw new UnAuthenticatedError('not authorized to access this route')
}
