import styles from './Card.module.css'
import { Icon } from '@iconify-icon/react';
import { useState } from 'react';
import { ModalDetail } from '@/Components/ModalDetail';
import { Picture } from '@/Components/Picture';

export const Card = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const details = data.details ?? [];
  const price = details.find((d) => d.type === 'price');
  const chips = details.filter((d) => d.type !== 'price');

  return (
    <>
      <article className={styles.card} onClick={() => setIsModalOpen(true)}>
        <figure className={styles.figure}>
          {data.category && <span className={styles.category}>{data.category}</span>}
          {data.rating != null && (
            <span className={styles.ratingBadge}>
              <Icon icon="mdi:star" width="15" aria-hidden="true" />
              {data.rating}
            </span>
          )}
          <Picture
            src={data.image}
            className={styles.card_img}
            alt={data.name}
            sizes="(max-width: 768px) 90vw, 380px"
          />
        </figure>

        <div className={styles.card_content}>
          <h3 className={styles.name}>{data.name}</h3>
          {data.short && <p className={styles.short}>{data.short}</p>}

          {chips.length > 0 && (
            <div className={styles.chips}>
              {chips.map((d, i) => (
                <span
                  key={i}
                  className={`${styles.chip} ${i % 2 === 0 ? styles.chipA : styles.chipB}`}
                >
                  <Icon icon={d.icon} width="18" aria-hidden="true" />
                  <span className={styles.chipLabel}>{d.label}</span>
                  <span className={styles.chipValue}>{d.value}</span>
                </span>
              ))}
            </div>
          )}

          <div className={styles.footer}>
            {price ? (
              <>
                <span className={styles.priceLabel}>From</span>
                <span className={styles.price} itemProp="price">${price.value}</span>
              </>
            ) : (
              <span className={styles.cta}>View details</span>
            )}
            <Icon
              icon="mdi:chevron-right"
              className={styles.chevron}
              width="22"
              aria-hidden="true"
            />
          </div>
        </div>
      </article>

      <ModalDetail
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tour={data}
      />
    </>
  );
};
