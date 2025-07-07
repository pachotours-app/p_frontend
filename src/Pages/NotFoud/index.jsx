import { Layout } from "@/Components/Layout"
import Carousel from '@/Components/Carousel'

function NotFound() {
  const main = ["404 Page not found","/pacho.jpg"]
  
  return (
    <Layout>
      <Carousel data={main} />
    </Layout>
  )
}

export default NotFound
