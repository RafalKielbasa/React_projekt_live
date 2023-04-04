import { createBrowserRouter } from 'react-router-dom'

import { Home, Characters, Episodes, Lacations } from 'src/pages/contentPages'
import MainPage from 'src/pages/MainPage'
import { getButtons, getData } from 'src/api/rickAndMorty'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    loader: getButtons,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'characters',
        element: <Characters />,
        loader: () => getData('character'),
      },
      {
        path: 'episodes',
        element: <Episodes />,
        loader: () => getData('episode'),
      },
      {
        path: 'locations',
        element: <Lacations />,
        loader: () => getData('location'),
      },
    ],
  },
])
