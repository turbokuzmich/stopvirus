import React, { useRef } from 'react';
import PageVisibility from 'react-page-visibility';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  video: {
    objectFit: 'cover',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
  },
  fade: {
    content: '""',
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
}));

/**
 * @param {Object} props
 * @param {string} props.src
 * @param {string} props.type
 * @param {string} [props.poster]
 * @param {string} [props.className]
 */
export default function BackgroundVideo({ className, src, type, poster }) {
  const videoRef = useRef(null);
  const classes = useStyles();

  const onVisibilityChanged = (isVisible) => {
    if (!videoRef.current) {
      return;
    }
    if (isVisible) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <PageVisibility onChange={onVisibilityChanged}>
      <div className={classes.container}>
        <video
          className={classnames(classes.video, className)}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
        >
          <source src={src} type={type} />
        </video>
        <div className={classes.fade} />
      </div>
    </PageVisibility>
  );
}

BackgroundVideo.propTypes = {
  className: PropTypes.string,
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
