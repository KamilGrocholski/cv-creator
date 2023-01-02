import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { HomeScreen, CreatorScreen } from './components/screens'
import { ThemeProvider } from './context/ThemeContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />
  },
  {
    path: '/creator',
    element: <CreatorScreen />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
