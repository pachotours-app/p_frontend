import { Layout } from "@/Components/Layout"
import Carousel from '@/Components/Carousel'
import { Card } from '@/Components/Card'
import { Table } from '@/Components/Table'
import styles from './Tours.module.css'
import tours from "../../Data/tours.json";

function Tours() {
  const main = ["Discover Ancient Mysteries & Hidden Wonders","/tours/tours.jpeg"]

  return (
    <Layout>
      <Carousel data={main} />
      <section className={styles.title}>
	<h1>Find Your Perfect Tour</h1>
	<p>This page features our top four tours, loved by adventurers like you. For a complete list of our offerings, check out the table below and find the tour that fits your style and preferences.</p>
      </section>
      <section className={styles.container}>
        {tours.slice(0,4).map((tour, id) => {
          return <Card key={id} data={tour} />;
        })}
      </section>
      <section className={styles.table}>
	<Table />
      </section>
    </Layout>
  )
}

export default Tours
