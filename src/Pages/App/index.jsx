// External dependencies
import { lazy, Suspense } from 'react'
import { useRoutes, useLocation, BrowserRouter } from 'react-router-dom'

// Components
import { NavBar } from '@/Components/NavBar'
import { Footer } from '@/Components/Footer'
import { Loader } from '@/Components/Loader'

import styles from './App.module.css'

// Pages — eager: Home is the landing route, lazy: everything else
import { Home } from '@/Pages/Home'
const About = lazy(() => import('@/Pages/About'))
const Tours = lazy(() => import('@/Pages/Tours'))
const Contact = lazy(() => import('@/Pages/Contact'))
const NotFound = lazy(() => import('@/Pages/NotFound'))
const Activities = lazy(() => import('@/Pages/Activities'))
const Volunteering = lazy(() => import('@/Pages/Volunteering'))
const Accommodation = lazy(() => import('@/Pages/Accommodation'))

const AppRoutes = () => {
  const routes = useRoutes([
    { path:'/', element:<Home /> },
    { path:'/about', element:<About /> },
    { path:'/tours', element:<Tours /> },
    { path:'/contact', element:<Contact /> },
    { path:'/activities', element:<Activities /> },
    { path:'/volunteering', element:<Volunteering /> },
    { path:'/accommodation', element:<Accommodation /> },
    { path:'/*', element:<NotFound /> },
  ])
  return routes
}

const AppContent = () => {
  const location = useLocation()
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div key={location.pathname} className={styles.page}>
          <AppRoutes />
        </div>
      </Suspense>
      <NavBar />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
