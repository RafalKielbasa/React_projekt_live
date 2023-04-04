import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

import React from 'react'

const MainPage = () => (
  <>
    <Navigation />
    <Outlet />
  </>
)

export default MainPage
