import { API_URLS } from "./apiUrls"
import { axiosCall } from "./axios"

export async function login(userName: string, password: string) {
  return await axiosCall({ url: API_URLS.LOGIN, method: "post", data: { userName, password } })
}
