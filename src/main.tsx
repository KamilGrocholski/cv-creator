import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { HomeScreen, CreatorScreen } from './components/screens'

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
    <RouterProvider router={router} />
  </React.StrictMode>
)
