import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const usePageContent = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const { state } = useLocation()

  useEffect(() => {
    setLoading(true)
    async function getURL() {
      try {
        const response = await axios.get(state)
        setData(response?.data.results)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }
    getURL()
  }, [])

  return { data, loading }
}

export default usePageContent
