// External dependencies
import { lazy, Suspense } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

// Components
import { NavBar } from '@/Components/NavBar'
import { Footer } from '@/Components/Footer'

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

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <AppRoutes />
      </Suspense>
      <NavBar />
      <Footer />
    </BrowserRouter>
  )
}

export default App
