import YouTubePlayer from "@/Components/YouTubePlayer"
import { Layout } from '@/Components/Layout'
import styles from './Home.module.css'
import Carousel from '@/Components/Carousel'

export const Home = () => {
  const main = ["Start Your Journey","/home/pacho.jpg"]
  const video = ["eEYnM78Qz6g","PachoTours Experiences"]; 
  
  return (
    <Layout>
      <Carousel data={main} />
      <fieldset className={styles.lonely_planet}>
	<legend><img className={styles.lonely_planet_img} src="/home/pacho.jpg" alt="lonely planet logo" /></legend>
	<q> A recommended horseback-riding guide who can take you around the archaeological sites and beyond.</q>
	<div><img className={styles.logo_lonely} src="/home/Lonely_Planet.svg" alt="lonely planet logo" /></div>
      </fieldset>      
      <YouTubePlayer video={video} />
    </Layout>
  )
}
