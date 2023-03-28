import React from 'react'

import useLogic from './usePageContent'
import Tab from './components/Tab'

const Episodes = () => {
  const { data, loading } = useLogic()

  return (
    <div>
      {data?.map(({ name, air_date }) => (
        <Tab name={name} airDate={air_date} />
      ))}
    </div>
  )
}

export default Episodes
