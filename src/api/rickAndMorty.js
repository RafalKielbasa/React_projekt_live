import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getButtons = async () => {
  try {
    const response = await axios.get(BASE_URL)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const getData = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/${page}`)
    return response
  } catch (error) {
    console.error(error)
  }
}
