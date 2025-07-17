import { Layout } from "@/Components/Layout" 
import styles from './Contact.module.css'
import { Icon } from '@iconify-icon/react';
import Carousel from '@/Components/Carousel'
  
function Contact() {

  const main = ["Let's Connect","/contact/contact.jpeg"]

  return (
    <Layout>
    <Carousel data={main} />
    <section className={styles.container}>
      <section className={styles.contact}>
	<h1 className={styles.title}>Your Next Adventure Awaits</h1>
	<p>Embark on a journey beyond the trails! Whether you have questions about our tours, need assistance with planning, or want to share your travel aspirations,
	  we’re just an email away. Connect with us through our social media networks and take the first step toward an unforgettable journey!
	</p>
	<div className={styles.email}>
	  <Icon icon="mdi:gmail" className={styles.icon} />
	  <a href="mailto:pachitocampesinito@hotmail.com">pachotourssanagustin@gmail.com</a>
	</div>
      </section>
      <article className={styles.business_card}>
        <ul className={styles.contact_list}>
            <li>
                <span>
		  <Icon icon="mdi:whatsapp" className={styles.icon}/>
		</span>
                <span className={styles.data}>
		  <a href="https://wa.me/573203755982?text=Hello!%20I%20want%20to%20take%20a%20tour%20with%20Pacho." target="_blank" rel="noopener noreferrer">+57 320 375 5982</a>
		</span>
            </li>
            <li>
                <span>
		 <Icon icon="ant-design:schedule-filled"  className={styles.icon}/>
		</span>
                <span className={styles.data}>
                    <p>Mon-Sat: 7am - 5pm</p>
                    <p>Sunday: 10am - 3pm</p>
                </span>
            </li>
            <li>
                <span>
                  <Icon icon="mdi:instagram" className={styles.icon}/>
		</span>
                <span className={styles.data}>
		  <a href="https://www.instagram.com/pachotourssanagustin/" target="_blank" rel="noopener noreferrer">pachotourssanagustin</a>
		</span>
            </li>
        </ul>
      </article>
    </section>
    </Layout>
  )
}

export default Contact
