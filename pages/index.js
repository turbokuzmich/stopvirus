import React, { useState, useRef, useCallback } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import Layout from '../components/Layout';
import Logo, { logoSize } from '../components/Logo/Wide';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import Menu from '../components/Menu';
import { FullPage, Slide } from '../components/FullPage';
import { Container, Box, Typography, Button, AppBar, Toolbar, IconButton, Link as A } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import mediaQuery from '../utils/mediaQuery';
import getStaticUrl from '../utils/static';

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
  appBar: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0)',
    backgroundColor: 'rgba(255,255,255,0)',
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
  menuIcon: {
    fill: '#fff',
  },
  detailsSlide: {
    backgroundImage: `url(${getStaticUrl('main-home-bg-2000w.jpg')})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
  },
  detailsContainer: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    alignItems: 'center',
    color: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  promoVideo: {
    width: '70vmin',
    height: '39.375vmin',
    marginBottom: theme.spacing(2),
    [mediaQuery([{ maxWidth: 500 }, { maxHeight: 500 }])]: {
      width: '90vmin',
      height: '50.625vmin',
    },
  },
  detailsText: {
    width: '70vmin',
    fontSize: '3vmin',
    fontWeight: 300,
    [mediaQuery([{ maxWidth: 500 }, { maxHeight: 500 }])]: {
      width: '90vmin',
      fontSize: '4vmin',
    },
    [mediaQuery([{ maxWidth: 320 }, { maxHeight: 320 }])]: {
      fontSize: '5vmin',
    },
  },
  detailsButtons: {
    width: '70vmin',
    [mediaQuery([{ maxWidth: 500 }, { maxHeight: 500 }])]: {
      width: '90vmin',
    },
  },
  detailsButton: {
    color: '#fff',
    borderColor: '#fff',
    margin: theme.spacing(0, 1, 1, 0),
    fontSize: '2vmin',
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

const pages = [
  {
    href: '/home',
    title: 'Для дома',
  },
  {
    href: '/beauty-salon',
    title: 'Для салонов красоты',
  },
  {
    href: '/manicure',
    title: 'Для маникюра',
  },
  {
    href: '/barbershop',
    title: 'Для барбершопов',
  },
  {
    href: '/restaurant',
    title: 'Для ресторанов',
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
  const onSlideChanged = useCallback((change) => {
    setSlide(change.to);
  }, []);

  const onDetailsClicked = useCallback(() => {
    if (fullPageRef && fullPageRef.current) {
      fullPageRef.current.scrollToSlide(PageSlide.Details);
    }
  }, []);

  const onLogoClicked = useCallback((event) => {
    event.preventDefault();

    if (fullPageRef && fullPageRef.current) {
      fullPageRef.current.scrollToSlide(PageSlide.Hero);
    }
  }, []);

  return (
    <Layout title="NEW///BREEZE — системы очистки воздуха">
      <>
        <BackgroundVideo
          src={getStaticUrl('background.mp4')}
          type="video/mp4"
          poster={getStaticUrl('background.jpg')}
        />
        <AppBar classes={{ root: classes.appBar }}>
          <Toolbar>
            <IconButton onClick={() => setMenuOpen(true)} disableFocusRipple>
              <MenuIcon classes={{ root: classes.menuIcon }} fontSize="large" />
            </IconButton>
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
                <Link href="/order">
                  <HeroButton color="primary" variant="contained" size="large">
                    Заказать
                  </HeroButton>
                </Link>
              </Box>
            </Container>
          </Slide>
          <Slide className={classes.detailsSlide}>
            <Box className={classes.detailsContainer}>
              <iframe
                className={classes.promoVideo}
                src="https://www.youtube.com/embed/aOoiTrvQDUY"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <Typography classes={{ root: classes.detailsText }} paragraph>
                Очистка воздуха от&nbsp;примесей, дыма, бактерий и&nbsp;вирусов. Сверхвысокая производительность
                и&nbsp;фильтры класса HEPA гарантируют результат. Приятные цены, индивидуальный дизайн внешней отделки,
                а&nbsp;также безопасный, очищенный воздух.
              </Typography>
              <Box className={classes.detailsButtons}>
                {pages.map(({ href, title }) => (
                  <Link key={href} href={href}>
                    <Button classes={{ root: classes.detailsButton }} variant="outlined">
                      {title}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
          </Slide>
        </FullPage>
      </>
    </Layout>
  );
}
