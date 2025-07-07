import { Layout } from "@/Components/Layout"
import Carousel from '@/Components/Carousel'
import { Card } from '@/Components/Card'
import styles from './Accommodation.module.css'
import hotels from "../../Data/hotels.json";

function Accommodation() {
  const main = ["Your Home, Anywhere","/accommodation/bridge.jpeg"]

  return (
    <Layout>
      <Carousel data={main} />
      <section className={styles.title}>
	<h1>Our Top Recommendations for Staying </h1>
	<p>Find the best hotels and accommodations in San Agustin. From cozy stays to comfortable lodgings, discover your perfect getaway!</p>
      </section>
      <section className={styles.container}>
        {hotels.map((hotel, id) => {
          return <Card key={id} data={hotel} />;
        })}
      </section>
    </Layout>
  )
}

export default Accommodation
