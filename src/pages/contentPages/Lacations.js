import React from 'react'

import useLogic from './usePageContent'
import Tab from './components/Tab'
import { type } from '@testing-library/user-event/dist/type'

const Lacations = () => {
  const { data, loading } = useLogic()

  return (
    <div>
      {data?.map(({ name, dimension, type }) => (
        <Tab name={name} dimension={dimension} type={type} />
      ))}
    </div>
  )
}

export default Lacations
