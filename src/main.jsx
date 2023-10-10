import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './roots/root.jsx'
import './index.css'
// redux imports
import { Provider } from 'react-redux'
import store from './redux/store.js'
// router imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GridPuppyContainer from './components/GridPuppyContainer.jsx'
import NewPuppyForm from './components/NewPuppyForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <GridPuppyContainer />
      },
      {
        path: "/NewPuppyForm",
        element: <NewPuppyForm />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
