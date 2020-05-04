import React from 'react';
import Head from 'next/head';
import BackgroundVideo from '../components/BackgroundVideo';
import { Container, Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  carousel: {
    height: '100vh',
    width: '100vw',
  },
  carouselItem: {
    height: '100vh',
    background: 'transparent',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Заголовок</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <BackgroundVideo src="/main.mp4" type="video/webm" poster="/background.jpg" />
      <Carousel
        className={(classes.carousel, 'transparent')}
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        useKeyboardArrows
        swipeable
      >
        <Container className={classes.carouselItem}>
          <Typography variant="h1">Миша, как дела?</Typography>
        </Container>
        <Container className={classes.carouselItem}>Fuck you</Container>
      </Carousel>
    </>
  );
}
