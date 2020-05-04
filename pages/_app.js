import 'react-responsive-carousel/lib/styles/carousel.css';
import './app.css';

import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <CssBaseline>
      <Component {...pageProps} />
    </CssBaseline>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
