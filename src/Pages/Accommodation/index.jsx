import { Layout } from "@/Components/Layout"
import Carousel from '@/Components/Carousel'
import { Card } from '@/Components/Card'
import { PageIntro } from '@/Components/PageIntro'
import { CardGrid } from '@/Components/CardGrid'
import hotels from "../../Data/hotels.json";

function Accommodation() {
  const main = ["Your Home, Anywhere","/accommodation/bridge.jpeg"]

  return (
    <Layout>
      <Carousel data={main} />
      <PageIntro
        title="Our Top Recommendations for Staying"
        text="Find the best hotels and accommodations in San Agustin. From cozy stays to comfortable lodgings, discover your perfect getaway!"
      />
      <CardGrid>
        {hotels.map((hotel, id) => (
          <Card key={id} data={hotel} />
        ))}
      </CardGrid>
    </Layout>
  )
}

export default Accommodation
