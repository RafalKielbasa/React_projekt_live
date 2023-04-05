import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

import Tab from './components/Tab'
import { postData } from 'src/api/localServer'

const Lacations = () => {
  const { data } = useLoaderData()

  const { results } = data

  useEffect(() => {
    const sendCollection = async () => postData('locations', results)
    sendCollection()
  }, [])

  return (
    <div>
      {results?.map(({ name, dimension, type }) => (
        <Tab name={name} dimension={dimension} type={type} />
      ))}
    </div>
  )
}

export default Lacations
