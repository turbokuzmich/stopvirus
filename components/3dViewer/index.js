import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import RotateViewer from './implementation/ci360.service.js';

export default function Viewer({ folder, filename, amount, fullscreen, magnifier }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      new RotateViewer(containerRef.current);
    }
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
      {...props}
    />
  );
}

Viewer.propTypes = {
  folder: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  amount: PropTypes.number,
  fullscreen: PropTypes.bool,
  magnifier: PropTypes.number,
};

Viewer.defaultProps = {
  amount: 36,
  fullscreen: false,
};
