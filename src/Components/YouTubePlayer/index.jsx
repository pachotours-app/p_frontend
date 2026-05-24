import { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import styles from './YouTubePlayer.module.css';

// Lightweight YouTube facade: shows the thumbnail and only mounts the
// (heavy) iframe after the user clicks play. Avoids loading the YouTube
// player JS on initial page load.
const YouTubePlayer = ({ video }) => {
  const [activated, setActivated] = useState(false);
  const [videoId, title] = video;

  const iframeSrc =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`;

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {activated ? (
          <iframe
            src={iframeSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className={styles.facade}
            onClick={() => setActivated(true)}
            aria-label={`Play video: ${title}`}
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
            }}
          >
            <span className={styles.playButton}>
              <Icon icon="mdi:play" width="48" height="48" />
            </span>
          </button>
        )}
      </div>
      <p className={styles.description}>{title}</p>
    </section>
  );
};

export default YouTubePlayer;
