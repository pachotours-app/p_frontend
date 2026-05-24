import { Layout } from "@/Components/Layout"
import Carousel from '@/Components/Carousel'
import { Card } from '@/Components/Card'
import { Table } from '@/Components/Table'
import { PageIntro } from '@/Components/PageIntro'
import { CardGrid } from '@/Components/CardGrid'
import styles from './Tours.module.css'
import tours from "../../Data/tours.json";

function Tours() {
  const main = ["Discover Ancient Mysteries & Hidden Wonders","/tours/tours.jpeg"]

  return (
    <Layout>
      <Carousel data={main} />
      <PageIntro
        title="Find Your Perfect Tour"
        text="This page features our top four tours, loved by adventurers like you. For a complete list of our offerings, check out the table below and find the tour that fits your style and preferences."
      />
      <CardGrid>
        {tours.slice(0,4).map((tour, id) => (
          <Card key={id} data={tour} />
        ))}
      </CardGrid>
      <section className={styles.table}>
        <Table />
      </section>
    </Layout>
  )
}

export default Tours
