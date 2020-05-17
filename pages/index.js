import React, { useState } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import Layout from '../components/Layout';
import Logo from '../components/Logo/Wide';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import { FullPage, Slide } from '../components/FullPage';
import { Container, Box, Typography, Button, AppBar, Toolbar, IconButton, Link as A } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

/**
 * @typedef {Object} SlideChange
 * @property {number} from
 * @property {number} to
 */

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
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  appBar: ({ slide }) => {
    const base = {
      transition: [
        'box-shadow 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        'background-color 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      ].join(','),
    };
    return Object.assign(
      {},
      base,
      slide === 0
        ? {
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0)',
            backgroundColor: 'rgba(255,255,255,0)',
          }
        : {
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
            backgroundColor: '#f0f0f0',
          }
    );
  },
  menuIcon: ({ slide }) => ({
    fill: slide === 0 ? '#fff' : theme.palette.grey['600'],
  }),
  catalogSlide: {
    backgroundColor: '#f8f8f8',
  },
}));

const HeroButton = withStyles((theme) => ({
  root: {
    padding: '16px 51px',
    margin: theme.spacing(1),
  },
}))(Button);

export default function Home() {
  const [slide, setSlide] = useState(0);
  const classes = useStyles({ slide });

  /**
   * @param {SlideChange} change
   */
  const onSlideChange = (change) => {
    setSlide(change.to);
  };

  return (
    <Layout title="NEW///BREEZE — системы очистки воздуха">
      <>
        <BackgroundVideo src="/background.mp4" type="video/mp4" poster="/background.jpg" />
        <AppBar classes={{ root: classes.appBar }}>
          <Toolbar>
            <IconButton disableFocusRipple>
              <MenuIcon classes={{ root: classes.menuIcon }} fontSize="large" />
            </IconButton>
            <Link href="/" passHref>
              <A>
                <Logo />
              </A>
            </Link>
          </Toolbar>
        </AppBar>
        <FullPage beforeChange={onSlideChange}>
          <Slide>
            <Container className={classes.hero}>
              <Box textAlign="center">
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
          <Slide className={classes.catalogSlide}></Slide>
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
