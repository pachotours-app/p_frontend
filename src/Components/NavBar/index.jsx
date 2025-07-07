import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { Icon } from '@iconify-icon/react';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <NavLink 
        to='/' 
        className={styles.logo_container}
        onClick={handleClick}
      >
        <img src="/logo.png" className={styles.logo}/>
      </NavLink>

      <button className={styles.menu_toggle} onClick={toggleMenu}>
	<Icon 
	  icon={menuOpen ? "pepicons-pop:times" : "pepicons-pop:menu"} 
	  width="35" 
	  height="35" 
	/>
      </button>

      <ul className={`${styles.nav_menu} ${menuOpen ? styles.open : ''}`}>
        <li className={styles.nav_item}>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item)}
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item)}
            onClick={handleClick}
          >
            About
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to='/tours'
            className={({ isActive }) => (isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item)}
            onClick={handleClick}
          >
            Tours
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to='/activities'
            className={({ isActive }) => (isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item)}
            onClick={handleClick}
          >
            Things to do
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to='/accommodation'
            className={({ isActive }) => (isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item)}
            onClick={handleClick}
          >
            Accommodation
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to='/volunteering'
            className={({ isActive }) => (isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item)}
            onClick={handleClick}
          >
            Volunteering
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item)}
            onClick={handleClick}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
