import tours from "../../Data/tours.json";
import styles from './Table.module.css'
import { useState } from 'react';
import { ModalDetail } from '@/Components/ModalDetail';

export const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleDetailClick = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.table_container}>
      <table className={styles.travel_table}>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Time</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.slice(4).map((tour) => (
            <tr key={tour.id}>
              <td>{tour.name}</td>
              <td>{tour.details[0].value}</td>
              <td className={styles.price} itemProp="price">${tour.details[2].value}</td>
              <td>
                <button 
                  className={styles.details_button}
                  onClick={() => handleDetailClick(tour)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDetail 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tour={selectedTour}
      />
    </div>
  );
};
