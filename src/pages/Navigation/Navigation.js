import styled from 'styled-components'
import { Link, useLoaderData } from 'react-router-dom'
import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeContext'

import { rickSanchez } from 'src/images'

import NavigationWrapper from './NavigationWrapper'

const MainPageContainer = styled.div`
  width: 100vw;
`

const Navigation = () => {
  const { data } = useLoaderData()
  const { toggleTheme, isDark } = useContext(ThemeContext)

  const buttons = data ? Object.keys(data) : []

  return (
    <MainPageContainer>
      <NavigationWrapper src={rickSanchez} alt={'Rick'}>
        <Link to='/'>
          <button>Home</button>
        </Link>
        {buttons.map((button) => (
          <Link to={button} state={data[button]}>
            <button>{button}</button>
          </Link>
        ))}
        <button onClick={toggleTheme}>{isDark ? 'Light' : 'Dark'}</button>
      </NavigationWrapper>
    </MainPageContainer>
  )
}

export default Navigation
