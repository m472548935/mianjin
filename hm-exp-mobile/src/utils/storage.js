const KEY = 'vant-mobile-exp-token'

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const setToken = (data) => {
  localStorage.setItem(KEY, data)
}

export const delToken = () => {
  localStorage.removeItem(KEY)
}
