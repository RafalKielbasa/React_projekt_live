import React from 'react'
import { useLoaderData } from 'react-router-dom'

import Tab from './components/Tab'

const Episodes = () => {
  const {
    data: { results },
  } = useLoaderData()

  return (
    <div>
      {results?.map(({ name, air_date }) => (
        <Tab name={name} airDate={air_date} />
      ))}
    </div>
  )
}

export default Episodes
