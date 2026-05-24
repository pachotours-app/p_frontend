import styles from './PageIntro.module.css';

// Centered page heading + lead paragraph shared across content pages.
export const PageIntro = ({ title, text }) => (
  <section className={styles.intro}>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </section>
);
