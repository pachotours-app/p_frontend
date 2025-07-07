import { Layout } from "@/Components/Layout"
import { Card } from '@/Components/Card'
import styles from './Activities.module.css'
import Carousel from '@/Components/Carousel'
import activities from "../../Data/bussines.json";

function Activities() {
  const main = [" Cuisine, Culture, Life","/activities/culture.jpg"]

  return (
    <Layout>
      <Carousel data={main} />
      <section className={styles.title}>
	<h1>Top Restaurants & Things to Do</h1>
	<p>Discover the best restaurants and exciting activities in San Agustin. From delicious local dishes to unforgettable adventures, explore it all here!</p>
      </section>
      <section className={styles.container}>
        {activities.map((activity, id) => {
          return <Card key={id} data={activity} />;
        })}
      </section>
    </Layout>
  )
}

export default Activities
