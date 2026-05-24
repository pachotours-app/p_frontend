import { Layout } from "@/Components/Layout"
import { Card } from '@/Components/Card'
import Carousel from '@/Components/Carousel'
import { PageIntro } from '@/Components/PageIntro'
import { CardGrid } from '@/Components/CardGrid'
import activities from "../../Data/bussines.json";

function Activities() {
  const main = [" Cuisine, Culture, Life","/activities/culture.jpg"]

  return (
    <Layout>
      <Carousel data={main} />
      <PageIntro
        title="Top Restaurants & Things to Do"
        text="Discover the best restaurants and exciting activities in San Agustin. From delicious local dishes to unforgettable adventures, explore it all here!"
      />
      <CardGrid>
        {activities.map((activity, id) => (
          <Card key={id} data={activity} />
        ))}
      </CardGrid>
    </Layout>
  )
}

export default Activities
