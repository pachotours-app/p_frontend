import { useEffect, useRef } from 'react';
import { Icon } from '@iconify-icon/react';
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

  const details = tour.details ?? [];
  const price = details.find((d) => d.type === 'price');
  const chips = details.filter((d) => d.type !== 'price');

  return (
    <section className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
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
          <Icon icon="mdi:close" width="22" aria-hidden="true" />
        </button>

        <div className={styles.header}>
          <div className={styles.imageWrap}>
            {tour.category && <span className={styles.category}>{tour.category}</span>}
            <Picture
              src={tour.image}
              alt={tour.name}
              className={styles.image}
              sizes="(max-width: 720px) 90vw, 420px"
            />
          </div>

          <div className={styles.headerInfo}>
            <div className={styles.titleRow}>
              <h2 id="modal-tour-title" className={styles.title}>{tour.name}</h2>
              {tour.rating != null && (
                <span className={styles.ratingBadge}>
                  <Icon icon="mdi:star" width="16" aria-hidden="true" />
                  {tour.rating}
                </span>
              )}
            </div>

            {tour.short && <p className={styles.short}>{tour.short}</p>}

            {chips.length > 0 && (
              <div className={styles.chips}>
                {chips.map((d, i) => (
                  <span key={i} className={styles.chip}>
                    <Icon icon={d.icon} width="18" aria-hidden="true" />
                    <span className={styles.chipLabel}>{d.label}:</span>
                    <span className={styles.chipValue}>{d.value}</span>
                  </span>
                ))}
              </div>
            )}

            {(price || tour.price_detail) && (
              <div className={styles.priceCallout}>
                <Icon
                  icon={price ? 'mdi:account-group' : 'mdi:card-account-phone'}
                  width="30"
                  aria-hidden="true"
                  className={styles.priceIcon}
                />
                <div className={styles.priceBody}>
                  {price && (
                    <span className={styles.priceLine}>
                      <span className={styles.priceFrom}>From</span>
                      <span className={styles.priceValue} itemProp="price">${price.value}</span>
                    </span>
                  )}
                  {tour.price_detail && (
                    <p className={styles.priceNote}>{tour.price_detail}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.body}>
          {tour.description && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>About</h3>
              <p>{tour.description}</p>
            </section>
          )}
          {tour.notes && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Good to know</h3>
              <p>{tour.notes}</p>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};
