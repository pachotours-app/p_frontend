import styles from './CardGrid.module.css';

// Responsive grid of cards shared by Tours, Accommodation and Activities.
export const CardGrid = ({ children }) => (
  <section className={styles.grid}>{children}</section>
);
