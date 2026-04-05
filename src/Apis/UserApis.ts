import { API_URLS } from "./apiUrls"
import { axiosCall, IAxiosResponse } from "./axios"

export async function getUserDetails(): Promise<IAxiosResponse<any>> {
  return await axiosCall({ url: API_URLS.USER_DETAILS, method: "get" })
}
