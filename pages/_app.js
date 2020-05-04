import React from 'react';
import PropTypes from 'prop-types';

export default function App(props) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
