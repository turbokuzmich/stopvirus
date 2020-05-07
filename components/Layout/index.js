import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};
