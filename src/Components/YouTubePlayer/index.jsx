import YouTube from 'react-youtube';
import styles from './YouTubePlayer.module.css';

const YouTubePlayer = ({ video }) => {
  const opts = {
    playerVars: {
      title: "Pacho Tours",
      enablejsapi: 1,
      origin: window.location.origin,
      host: 'https://www.youtube-nocookie.com',
      modestbranding: 1,
      rel: 0,
      autoplay: 0,
      controls: 1,
      fs: 1,
      iv_load_policy: 3,
      nocookie: true,
      suggestedQuality: 'hd1080'
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
	<YouTube
	  videoId={video[0]}
	  opts={opts}
	/>
      </div>
      <p className={styles.description}>{video[1]}</p>
    </section>
  );
};

export default YouTubePlayer;
