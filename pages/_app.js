import 'react-responsive-carousel/lib/styles/carousel.css';
import './app.css';

import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f07c00',
      contrastText: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat", "Helvetica", sans-serif',
    },
    h2: {
      fontFamily: '"Montserrat", "Helvetica", sans-serif',
    },
    h3: {
      fontFamily: '"Montserrat", "Helvetica", sans-serif',
    },
    h4: {
      fontFamily: '"Montserrat", "Helvetica", sans-serif',
    },
  },
});

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CssBaseline>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
