import React, { useRef } from 'react';
import PageVisibility from 'react-page-visibility';
import PropTypes from 'prop-types';

/**
 * @param {Object} props
 * @param {string} props.src
 * @param {string} props.type
 * @param {string} [props.poster]
 * @param {string} [props.className]
 */
export default function BackgroundVideo({ className, src, type, poster }) {
  const videoRef = useRef(null);

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
      <video className={className} poster={poster} autoPlay loop muted playsInline ref={videoRef}>
        <source src={src} type={type} />
      </video>
    </PageVisibility>
  );
}

BackgroundVideo.propTypes = {
  className: PropTypes.string,
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
