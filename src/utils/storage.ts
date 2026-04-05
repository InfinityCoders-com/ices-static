export const getloggedInUserDetails = () => JSON.parse(localStorage.getItem("userDetails") || "null")
export const setloggedInUserDetails = (d: any) => localStorage.setItem("userDetails", JSON.stringify(d))

export const getAtombergAccessToken = () => JSON.parse(localStorage.getItem("atom:accessToken") || "null")
export const setAtombergAccessToken = (d: any) => localStorage.setItem("atom:accessToken", JSON.stringify(d))
