import styles from './Card.module.css'
import { Icon } from '@iconify-icon/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react'; // Add this
import { ModalDetail } from '@/Components/ModalDetail'; 

export const Card = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
    <article className={styles.card} onClick={() => setIsModalOpen(true)}>
      <figure>
	<span className={styles.category}>{data.data.category}</span>
	<img
	  src={data.data.image}
	  className={styles.card_img}
	  alt={data.data.name}
	/>
      </figure>
      <div className={styles.card_content}>
	<h3>{data.data.name}</h3>
        <div className={styles.rating}>
          <Rating
            value={data.data.rating}
            readOnly
            style={{ maxWidth: 100 }}
          />
          <span className={styles.rating_count}>({data.data.rating} reviews)</span>
        </div>
	<p>{data.data.short}</p>
	{data.data.details?.map((detail, index) => (
          <span key={index} className={styles.details_display}>
            <span className={styles.icon_and_text}>
              <Icon icon={detail.icon} width="25px" height="25px" />
              <span>{detail.label}:</span>
            </span>
            <span 
              className={ detail.type === 'price' ? styles.details_price : styles.details_value}
              {...(detail.type === 'price' && { itemProp: "price" })}
            >
              {detail.type === 'price' ? `$${detail.value}` : detail.value}
            </span>
          </span>
        ))}
      </div>
    </article>
    <ModalDetail 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tour={data.data}
      />
    </>
  )
}
