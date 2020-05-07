import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import Layout from '../components/Layout';
import Logo from '../components/Logo/Wide';
import { FullPage, Slide } from '../components/FullPage';
import { Container, Box, Typography, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    height: '100%',
    background: 'transparent',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroText: {
    margin: theme.spacing(1, 0, 5),
    fontWeight: 600,
    textTransform: 'uppercase',
  },
}));

const HeroButton = withStyles((theme) => ({
  root: {
    padding: '16px 51px',
    margin: theme.spacing(1),
  },
}))(Button);

export default function Home() {
  const classes = useStyles();

  return (
    <Layout title="NEW///BREEZE — системы очистки воздуха">
      <>
        <BackgroundVideo src="/background.mp4" type="video/mp4" poster="/background.jpg" />
        <FullPage>
          <Slide>
            <Container className={classes.hero}>
              <Box textAlign="center">
                <Logo />
                <Typography variant="h4">компактные интерьерные</Typography>
                <Typography
                  variant="h3"
                  classes={{
                    root: classes.heroText,
                  }}
                >
                  системы очистки воздуха
                </Typography>
                <HeroButton variant="contained" size="large">
                  Подробнее
                </HeroButton>
                <HeroButton color="primary" variant="contained" size="large">
                  Заказать
                </HeroButton>
              </Box>
            </Container>
          </Slide>
          <Slide>Крутой товар</Slide>
        </FullPage>
        {/* <Carousel */}
        {/*   className={(classes.carousel, 'transparent')} */}
        {/*   showThumbs={false} */}
        {/*   autoPlay={false} */}
        {/*   infiniteLoop={false} */}
        {/*   showArrows={false} */}
        {/*   showStatus={false} */}
        {/*   showIndicators={false} */}
        {/*   useKeyboardArrows */}
        {/*   swipeable */}
        {/* > */}
        {/*   <Container className={classes.carouselItem}>Fuck you</Container> */}
        {/* </Carousel> */}
      </>
    </Layout>
  );
}
