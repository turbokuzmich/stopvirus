import React, { useState, useRef } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import Layout from '../components/Layout';
import Logo, { logoSize } from '../components/Logo/Wide';
import MenuIcon from '@material-ui/icons/Menu';
import { FullPage, Slide } from '../components/FullPage';
import { Container, Box, Typography, Button, AppBar, Toolbar, IconButton, Link as A } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import mediaQuery from '../utils/mediaQuery';

const PageSlide = {
  Hero: 0,
  Details: 1,
};

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
    [theme.breakpoints.down('md')]: {
      fontSize: '2.7vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
    },
  },
  heroLargeText: {
    margin: theme.spacing(1, 0, 5),
    textTransform: 'uppercase',
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: '3.7vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '5vw',
    },
  },
  heroLogo: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: logoSize(50, 'vw'),
    [theme.breakpoints.down('sm')]: logoSize(70, 'vw'),
    [theme.breakpoints.down('xs')]: { display: 'none' },
    [mediaQuery({ maxHeight: 600 })]: { display: 'none' },
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
      slide === PageSlide.Hero
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
  appBarLogo: ({ slide }) => {
    const base = {
      position: 'relative',
      top: 4,
      marginLeft: theme.spacing(1),
      transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    };
    const size = logoSize(190);
    const visibility = slide === PageSlide.Hero ? { opacity: 0 } : { opacity: 1 };
    const media = { [mediaQuery([{ maxHeight: 600 }, { maxWidth: 599 }])]: { opacity: 1 } };

    return Object.assign({}, base, size, visibility, media);
  },
  appBarLogoLink: ({ slide }) => (slide === PageSlide.Hero ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }),
  menuIcon: ({ slide }) => ({
    fill: slide === PageSlide.Hero ? '#fff' : theme.palette.grey['600'],
  }),
  detailsSlide: {
    backgroundColor: '#f8f8f8',
  },
}));

const HeroButton = withStyles((theme) => ({
  root: {
    padding: '16px 51px',
    margin: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3vw',
    },
    [mediaQuery({ maxWidth: 450 })]: {
      padding: '16px 30px',
    },
    [mediaQuery({ maxWidth: 400 })]: {
      fontSize: '3.5vw',
    },
  },
}))(Button);

export default function Home() {
  const [slide, setSlide] = useState(0);
  const fullPageRef = useRef(null);
  const classes = useStyles({ slide });

  /**
   * @param {SlideChange} change
   */
  const onSlideChanged = (change) => {
    setSlide(change.to);
  };

  const onDetailsClicked = () => {
    if (fullPageRef && fullPageRef.current) {
      fullPageRef.current.scrollToSlide(PageSlide.Details);
    }
  };

  const onLogoClicked = (event) => {
    event.preventDefault();

    if (fullPageRef && fullPageRef.current) {
      fullPageRef.current.scrollToSlide(PageSlide.Hero);
    }
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
            {/* FIXME scrolls FullPage to top on click */}
            <A classes={{ root: classes.appBarLogoLink }} href="/" onClick={onLogoClicked}>
              <Logo className={classes.appBarLogo} />
            </A>
          </Toolbar>
        </AppBar>
        <FullPage beforeChange={onSlideChanged} ref={fullPageRef}>
          <Slide>
            <Container className={classes.hero}>
              <Box textAlign="center">
                <Logo className={classes.heroLogo} />
                <Typography variant="h4" classes={{ root: classes.heroText }}>
                  компактные интерьерные
                </Typography>
                <Typography
                  variant="h3"
                  classes={{
                    root: classes.heroLargeText,
                  }}
                >
                  системы очистки воздуха
                </Typography>
                <HeroButton variant="contained" size="large" onClick={onDetailsClicked}>
                  Подробнее
                </HeroButton>
                <HeroButton color="primary" variant="contained" size="large">
                  Заказать
                </HeroButton>
              </Box>
            </Container>
          </Slide>
          <Slide className={classes.detailsSlide}></Slide>
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
