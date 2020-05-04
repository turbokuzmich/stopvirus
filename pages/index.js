import React from 'react';
import Head from 'next/head';
import BackgroundVideo from '../components/BackgroundVideo';
import { Container } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Заголовок</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <BackgroundVideo src="/background.webm" type="video/webm" poster="/background.jpg" />
      <Carousel
        className={(styles.carousel, 'transparent')}
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows
        swipeable
      >
        <Container className={styles['carousel-item']}>Obanze</Container>
        <Container className={styles['carousel-item']}>Fuck you</Container>
      </Carousel>
    </>
  );
}
