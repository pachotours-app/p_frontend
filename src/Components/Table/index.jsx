import tours from "../../Data/tours.json";
import styles from './Table.module.css'
import { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import { ModalDetail } from '@/Components/ModalDetail';
import { Picture } from '@/Components/Picture';

export const Table = () => {
  const [selectedTour, setSelectedTour] = useState(null);

  return (
    <div className={styles.list}>
      {tours.slice(4).map((tour) => {
        const time = tour.details.find((d) => d.type === 'time');
        const type = tour.details.find((d) => d.type === 'tourType');
        const price = tour.details.find((d) => d.type === 'price');

        return (
          <button
            key={tour.id}
            className={styles.row}
            onClick={() => setSelectedTour(tour)}
            aria-label={`View details for ${tour.name}`}
          >
            <span className={styles.thumb}>
              <Picture src={tour.image} alt="" sizes="96px" />
            </span>

            <span className={styles.name}>{tour.name}</span>

            <span className={styles.meta}>
              {time && (
                <span className={`${styles.chip} ${styles.chipTime}`}>
                  <Icon icon={time.icon} width="20" aria-hidden="true" />
                  {time.value}
                </span>
              )}
              {type && (
                <span className={`${styles.chip} ${styles.chipType}`}>
                  <Icon icon={type.icon} width="20" aria-hidden="true" />
                  {type.value}
                </span>
              )}
            </span>

            {price && (
              <span className={styles.price} itemProp="price">${price.value}</span>
            )}

            <Icon
              icon="mdi:chevron-right"
              className={styles.chevron}
              width="24"
              aria-hidden="true"
            />
          </button>
        );
      })}

      <ModalDetail
        isOpen={!!selectedTour}
        onClose={() => setSelectedTour(null)}
        tour={selectedTour}
      />
    </div>
  );
};
