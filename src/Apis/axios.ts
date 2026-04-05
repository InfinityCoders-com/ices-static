import axios from "axios"

const fileNameWithPath = "src/Apis/axios"

export interface IAxiosResponse<T> {
  data?: T
  isLoading?: boolean
  isSuccess?: boolean
  isError?: boolean
  message?: string
}

export const initialDataState = (state?: IAxiosResponse<any[] | Object>) => ({
  data: state?.data || [],
  isLoading: !!state?.isLoading,
  isSuccess: !!state?.isSuccess,
  isError: !!state?.isError,
  message: ""
})

export interface IAxiosCall {
  method?: "get" | "post" | "put" | "patch" | "delete" | "options"
  url: string
  data?: any | any[]
  headers?: any
  params?: { [key: string]: string | number }
  withCredentials?: boolean
  cancelSignal?: any
}

// For more options https://axios-http.com/docs/req_config
export async function axiosCall({ method = "get", url, data, headers, params, withCredentials = true, cancelSignal }: IAxiosCall) {
  try {
    const URL = `http://localhost:4000${url}`
    const response = await axios({ method, url: URL, params, data, headers, withCredentials, signal: cancelSignal })
    if (response.status >= 200 && response.status < 300) {
      return initialDataState({ isSuccess: true, data: response.data })
    } else {
      return initialDataState({ isError: true, data: response })
    }
  } catch (error: any) {
    console.error(`Error while calling axiosCall in file ${fileNameWithPath}: `, error)
    if (error.response.status === 401 && !window.location.pathname.includes("login")) {
      window.location.href = "/login"
      return initialDataState({ isError: true, data: error.response })
    }
    if (error.status >= 300 && error.status < 600 && error.response) {
      return initialDataState({ isError: true, data: error.response.data || error.response, message: "Something went wrong" })
    }
    return initialDataState({ isError: true, data: error, message: "Something went wrong" })
  }
}
