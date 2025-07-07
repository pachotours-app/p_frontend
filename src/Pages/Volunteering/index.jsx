import { Layout } from "@/Components/Layout"
import Carousel from '@/Components/Carousel'
import styles from './Volunteering.module.css'

function Volunteering() {

  const content = {
	title: "Volunteer with Us",
	text: "Join us in making a difference. Volunteering is more than just giving your time – it’s about creating meaningful connections, sharing your skills, and making an impact. Connect with us, and meet our little friends! Together, let’s create unforgettable experiences and spread positivity. Ready to start? Your journey begins here.",
	img: "/volunteer/volunteer.jpeg"
  }

  const main = ["Become Part of Our Story","/volunteer/volunteering.jpg"]

  return (
    <Layout>
      <Carousel data={main} />
      <section className={styles.container}>
	<article>
	  <section className={styles.text}>
	    <h1>{content.title}</h1>
	    <p>{content.text}</p>
	  </section>
	  <img
	    src={content.img}
	    alt={content.title}
	    loading="lazy"
	  />
	</article>
      </section>
    </Layout>
  )
}

export default Volunteering
