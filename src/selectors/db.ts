const getAuthorizationFromDb = (db: any) => db.allTabData.authorization
const getAuthenticationFromDb = (db: any) => db.allTabData.authentication
const isActive = (u: string) => u === 'TRUE'

export function getallAuthorizations(db: any) {
  const authorization = getAuthorizationFromDb(db)
  return authorization.rows
}

export function isGuestAuthorizationAllowed(db: any) {
  const auth = getAuthorizationFromDb(db).rows
  return auth.some((user: any) => user.roleName === 'guest' && isActive(user.isActive))
}

export function doesUserNameExist(db: any, userName: string) {
  const users = getAuthenticationFromDb(db).rows
  return users.some((user: any) => user.userName === userName)
}

export function isUserNameEnabled(db: any, userName: string) {
  const users = getAuthenticationFromDb(db).rows
  return users.some((user: any) => user.userName === userName && isActive(user.isActive))
}

export function isLoginValid(db: any, userName: string, password: string) {
  const users = getAuthenticationFromDb(db).rows
  return users.some((u: any) => isActive(u.isActive) && u.userName === userName && u.password === password)
}

export function getUserDetails(db: any, userName: string, password: string) {
  const users = getAuthenticationFromDb(db).rows
  return users.find((u: any) => isActive(u.isActive) && u.userName === userName && u.password === password)
}

