import { Layout } from "@/Components/Layout"
import Carousel from '@/Components/Carousel'
import styles from './About.module.css'

function About() {
  const main = ["Our Story","/about/main.jpg"]

  const content = [
      {
	title: "A Family Business",
	text: "We are a family from southern Huila - colombia, passionate about sharing the wonders of our land. We are dedicated to offering unique experiences in natural and archaeological tourism, connecting our visitors with the rich history and breathtaking landscapes of the region.",
	img: "/about/us.jpg",
      },
      {
	title: "We are culture",
	text: "We cultivate coffee with care and love for our land, striving to produce high-quality beans that reflect the unique character of our mountains. Our goal is to bring a piece of Huila to every cup, sharing our passion for this cherished Colombian tradition.",
	img: "/about/house.jpg",
      },
      {
	title: "Experiences",
	text: "We also offer the opportunity to participate in volunteer programs, where you can immerse yourself in our culture, collaborate in our daily activities, and enjoy an authentic and enriching experience as part of our family.",
	img: "/about/house.jpg",
      },
    ];

  return (
    <Layout>
      <Carousel data={main} />
      <section className={styles.about_us}>
        {content.map((item, index) => (
          <article
	    key={index}
	    >
	    <section className={styles.about_text}>
	      <h1>{item.title}</h1>
	      <p>{item.text}</p>
	    </section>
            <img 
              src={item.img} 
              alt={`About us content ${index + 1}`} 
              loading="lazy" 
            />
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default About
