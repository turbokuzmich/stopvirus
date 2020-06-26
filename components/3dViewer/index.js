import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import RotateViewer from './implementation/ci360.service.js';

export default function Viewer({ folder, filename, amount, fullscreen, magnifier, autoplay, reverse, speed }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let rotateViewer;

    if (containerRef && containerRef.current) {
      rotateViewer = new RotateViewer(containerRef.current);
    }

    return () => {
      rotateViewer.destroy();
    };
  }, []);

  const props = {};

  if (typeof magnifier === 'number') {
    Object.assign(props, {
      'data-magnifier': magnifier,
    });
  }

  return (
    <div
      ref={containerRef}
      data-folder={folder}
      data-filename={filename}
      data-amount={amount}
      data-full-screen={fullscreen}
      data-autoplay={autoplay}
      data-spin-reverse={reverse}
      data-speed={speed}
      data-drag-speed={speed}
      {...props}
    />
  );
}

Viewer.propTypes = {
  folder: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  amount: PropTypes.number,
  fullscreen: PropTypes.bool,
  autoplay: PropTypes.bool,
  magnifier: PropTypes.number,
  reverse: PropTypes.bool,
  speed: PropTypes.number,
};

Viewer.defaultProps = {
  amount: 36,
  fullscreen: false,
  autoplay: false,
  reverse: false,
  speed: 150,
};
