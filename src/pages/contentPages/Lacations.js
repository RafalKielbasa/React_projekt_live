import React from 'react'
import { useLoaderData } from 'react-router-dom'

import Tab from './components/Tab'

const Lacations = () => {
  const {
    data: { results },
  } = useLoaderData()

  return (
    <div>
      {results?.map(({ name, dimension, type }) => (
        <Tab name={name} dimension={dimension} type={type} />
      ))}
    </div>
  )
}

export default Lacations
