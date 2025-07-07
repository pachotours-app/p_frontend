import styles from './Carousel.module.css';

const Carousel = (data) => {
  const style = {
    backgroundImage: `url(${data.data[1]})`,
  };

  return (
    <>
      <h1 style={style} className={styles.carousel}>{data.data[0]}</h1>
    </>
  );
};

export default Carousel;
