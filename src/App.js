import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { router } from 'src/routes/routes'

import ThemeContextProvider from './context/ThemeContext'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </ThemeContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
