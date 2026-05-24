import { useEffect, useRef } from 'react';
import { Icon } from '@iconify-icon/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Picture } from '@/Components/Picture';
import styles from './ModalDetail.module.css';

export const ModalDetail = ({ isOpen, onClose, tour }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    // Lock body scroll while the dialog is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the dialog.
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tour) return null;

  return (
    <section className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-tour-title"
      >
        <button
          ref={closeRef}
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 id="modal-tour-title" className={styles.tourTitle}>{tour.name}</h2>
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
            <Picture
              src={tour.image}
              alt={tour.name}
              className={styles.tourImage}
              sizes="(max-width: 768px) 90vw, 450px"
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
