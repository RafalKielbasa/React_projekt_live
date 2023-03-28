import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Tab from './components/Tab'
import useLogic from './usePageContent'

const Wrapper = styled.div`
  height: 200px;
  display: flex;
`

const Characters = () => {
  const [number, setNumber] = useState(0)
  const { data, loading } = useLogic()

  const navigate = useNavigate()

  useEffect(() => {
    if (number > 4) navigate('/')
  }, [number])

  return (
    <>
      <Wrapper>
        {data?.map(({ name, status }) => (
          <Tab name={name} status={status} />
        ))}
      </Wrapper>
      <button onClick={() => setNumber((prev) => prev + 1)}>
        Kliknij mnie
      </button>
    </>
  )
}

export default Characters
