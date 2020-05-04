import React from 'react';
import Head from 'next/head';
import styles from './index.module.css';
import BackgroundVideo from '../components/BackgroundVideo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Заголовок</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <BackgroundVideo className={styles['video-bg']} src="/background.webm" type="video/webm" poster="/background.jpg" />
    </>
  );
}
