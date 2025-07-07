import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';

export const Footer = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className={styles.footer}>
      <section className={styles.first_section}>
	<h1>"Since 1990, sharing the best of San Agustin. Come and write your own story with us"</h1>
	<ul className={styles.footer_links}>
	  <li>
	    <NavLink
	      to="/about"
	      onClick={handleClick}
	      >
	      About Us
	    </NavLink>
	  </li>
	  <li>
	    <NavLink
	      to="/tours"
	      onClick={handleClick}
	      >
	      Tours
	    </NavLink>
	  </li>
	  <li>
	    <NavLink
	      to="/activities"
	      onClick={handleClick}
	      >
	      Things to do
	    </NavLink>
	  </li>
	  <li>
	    <NavLink
	      to="/accommodation"
	      onClick={handleClick}
	      >
	      Accommodation
	    </NavLink>
	  </li>
	  <li>
	    <NavLink
	      to="/volunteering"
	      onClick={handleClick}
	      >
	      Volunteering
	    </NavLink>
	  </li>
	</ul>
      </section>
      <section className={styles.media_links}>
	<a href="https://www.instagram.com/pachotourssanagustin/" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:instagram" className={styles.icon}/></a>
	<a href="https://www.youtube.com/@pachotours1483" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:youtube" className={styles.icon} /></a>
	<a href="mailto:pachitocampesinito@hotmail.com"><Icon icon="mdi:gmail" className={styles.icon} /></a>
	<a href="https://wa.me/573118277972?text=Hello!%20I%20want%20to%20take%20a%20tour." target="_blank" rel="noopener noreferrer"><Icon icon="mdi:whatsapp" className={styles.icon} /></a>
	      </section>
      <hr />
      <section className={styles.final_section}>
	<img src="/logo_footer.png" className={styles.logo_footer}/>
	<p className={styles.rights_section}> 
	  &copy; {new Date().getFullYear()} PachoTours. All rights reserved. Website Design by
	  <a href="https://jcmunozo.pro" target="_blank" rel="noopener noreferrer">jcmunozo™</a>
	  <Icon icon="noto:red-heart" width="13" height="13" />
	</p>
      </section>
    </footer>
  )
}
