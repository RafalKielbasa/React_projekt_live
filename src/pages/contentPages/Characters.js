import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate, useLoaderData } from 'react-router-dom'

import Tab from './components/Tab'
import { postData, getColection } from 'src/api/localServer'

const Wrapper = styled.div`
  height: 200px;
  display: flex;
`

const Characters = () => {
  const [number, setNumber] = useState(0)

  const { data } = useLoaderData()

  const { results } = data

  const navigate = useNavigate()

  useEffect(() => {
    if (number > 4) navigate('/')
  }, [number])

  return (
    <>
      <Wrapper>
        {results?.map(({ name, status }) => (
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
