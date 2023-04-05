import axios from 'axios'

export const postData = async (page, data) => {
  try {
    await axios.post(`http://localhost:3000/${page}/?`, { data })
  } catch (error) {
    console.error(error)
  }
}
