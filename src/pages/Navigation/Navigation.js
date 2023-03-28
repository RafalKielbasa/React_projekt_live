import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { rickSanchez } from 'src/images'

import useLogic from './useMainPage'
import NavigationWrapper from './NavigationWrapper'

const MainPageContainer = styled.div`
  width: 100vw;
`

const Navigation = () => {
  const { data } = useLogic()

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
      </NavigationWrapper>
    </MainPageContainer>
  )
}

export default Navigation
