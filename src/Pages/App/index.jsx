// External dependencies
import { useRoutes, BrowserRouter } from 'react-router-dom'

// Components
import { NavBar } from '@/Components/NavBar'
import { Footer } from '@/Components/Footer'

// Pages
import { Home } from '@/Pages/Home'
import About from '@/Pages/About'
import Tours from '@/Pages/Tours'
import Contact from '@/Pages/Contact'
import NotFound from '@/Pages/NotFound'
import Activities from '@/Pages/Activities'
import Volunteering from '@/Pages/Volunteering'
import Accommodation from '@/Pages/Accommodation'

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
      <AppRoutes />
      <NavBar />
      <Footer />
    </BrowserRouter>
  )
}

export default App
