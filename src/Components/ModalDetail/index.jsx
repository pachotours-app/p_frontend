import { Icon } from '@iconify-icon/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import styles from './ModalDetail.module.css';

export const ModalDetail = ({ isOpen, onClose, tour }) => {
  if (!isOpen || !tour) return null;

  return (
    <section className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        
        <h2 className={styles.tourTitle}>{tour.name}</h2>
        <div className={styles.tourMeta}>
          <span className={styles.tourCategory}>{tour.category}</span>
          <Rating 
            value={tour.rating} 
            readOnly 
            style={{ maxWidth: 100 }}
          />
	  <span className={styles.rating_count}>({tour.rating} reviews)</span>
        </div>

        <div className={styles.tourGrid}>
          <div className={styles.tourImageContainer}>
            <img 
              src={tour.image} 
              alt={tour.name}
              className={styles.tourImage}
            />
          </div>

          <div className={styles.tourInfo}>
	    <p className={styles.tourShort}>{tour.short}</p>
            {tour.details.map((detail, index) => (
              <div key={index} className={styles.infoSection}>
                <h3 className={styles.infoHeader}>
                  <Icon icon={detail.icon} width="20" />
                  {detail.label}
                </h3>
                <p className={detail.type === 'price' ? styles.tourPrice : styles.tourValue}>
                  {detail.type === 'price' ? '$' : ''}{detail.value}
                </p>
              </div>
            ))}
	    <div className={styles.tourDescription}>
	      <h3>Description</h3>
	      <p>{tour.description}</p>
	    </div>
          </div>

          <div className={styles.tourDescription}>
            <h3>Notes</h3>
            <p>{tour.notes}</p>
	    <p className={styles.tourPriceDetail}>{tour.price_detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
