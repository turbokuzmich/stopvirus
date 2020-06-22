import React, { useState, useRef } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import Layout from '../components/Layout';
import Logo, { logoSize } from '../components/Logo/Wide';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import Menu from '../components/Menu';
import { FullPage, Slide } from '../components/FullPage';
import { Container, Box, Typography, Button, AppBar, Toolbar, IconButton, Link as A, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import mediaQuery from '../utils/mediaQuery';
import classnames from 'classnames';

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
  carousel: {
    height: 'calc(100vh - 64px)',
    paddingTop: 64,
    '& .control-dots .dot': {
      background: 'rgba(0, 0, 0, .2)',
      boxShadow: 'none',
    },
  },
  carouselItem: {
    height: 'calc(100vh - 64px)',
  },
  gridRoot: {
    height: '100%',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
  },
  gridItemPicture: {},
  gridItemText: {
    paddingLeft: theme.spacing(12),
  },
  gridParagraph: {
    marginBottom: theme.spacing(2),
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

const slides = [
  {
    title: 'Для дома',
    link: '/home',
    text:
      'Сюда нужен краткий текст, описывающий отличительные особенности. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Для салонов красоты',
    link: '/beauty-salon',
    text:
      'Сюда нужен краткий текст, описывающий отличительные особенности. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Для маникюра',
    link: '/manicure',
    text:
      'Сюда нужен краткий текст, описывающий отличительные особенности. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Для барбер шопов',
    link: '/barbershop',
    text:
      'Сюда нужен краткий текст, описывающий отличительные особенности. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Для ресторанов',
    link: '/restaurant',
    text:
      'Сюда нужен краткий текст, описывающий отличительные особенности. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);
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
            <IconButton onClick={() => setMenuOpen(true)} disableFocusRipple>
              <MenuIcon classes={{ root: classes.menuIcon }} fontSize="large" />
            </IconButton>
            {/* FIXME scrolls FullPage to top on click */}
            <A classes={{ root: classes.appBarLogoLink }} href="/" onClick={onLogoClicked}>
              <Logo className={classes.appBarLogo} />
            </A>
          </Toolbar>
        </AppBar>
        <Menu open={isMenuOpen} onClose={() => setMenuOpen(false)} />
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
          <Slide className={classes.detailsSlide}>
            <Carousel
              className={classes.carousel}
              showThumbs={false}
              autoPlay={false}
              infiniteLoop={false}
              showStatus={false}
              useKeyboardArrows
              renderArrowPrev={(onClick, hasPrev, label) => {
                return <SliderArrow onClick={onClick} label={label} hasPrev={hasPrev} prev />;
              }}
              renderArrowNext={(onClick, hasNext, label) => {
                return <SliderArrow onClick={onClick} label={label} hasNext={hasNext} next />;
              }}
              swipeable
            >
              {slides.map(({ title, link, text }, index) => {
                return (
                  <Container key={index} className={classes.carouselItem}>
                    <Grid container spacing={0} classes={{ root: classes.gridRoot }}>
                      <Grid item classes={{ item: classnames(classes.gridItem, classes.gridItemPicture) }}>
                        <img src="https://via.placeholder.com/500x350" alt="Для дома" />
                      </Grid>
                      <Grid item xs classes={{ item: classnames(classes.gridItem, classes.gridItemText) }}>
                        <Box textAlign="left">
                          <Typography variant="h4" gutterBottom>
                            {title}
                          </Typography>
                          <Typography classes={{ root: classes.gridParagraph }}>{text}</Typography>
                          <Link href={link}>
                            <Button color="primary" variant="contained" size="large">
                              Подробнее
                            </Button>
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                );
              })}
            </Carousel>
          </Slide>
        </FullPage>
      </>
    </Layout>
  );
}

const SliderArrow = withStyles({
  main: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    height: 180,
    width: 40,
    lineHeight: '180px',
    textAlign: 'center',
    cursor: 'pointer',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: '#ffffff',
    fontSize: '2rem',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .1)',
    },
  },
  next: {
    left: 'initial',
    right: 0,
  },
  disabled: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    cursor: 'default',
  },
})(function Arrow({ classes, onClick, hasPrev, hasNext, prev, next }) {
  const symbol = prev ? '⮃' : '⮁';
  const disabled = (prev && !hasPrev) || (next && !hasNext);

  return (
    <div onClick={onClick} className={classnames(classes.main, { [classes.next]: next, [classes.disabled]: disabled })}>
      {symbol}
    </div>
  );
});
