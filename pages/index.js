import React, { useState, useRef } from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import Layout from '../components/Layout';
import Logo, { logoSize } from '../components/Logo/Wide';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import Menu from '../components/Menu';
import { FullPage, Slide } from '../components/FullPage';
import { Container, Box, Typography, Button, AppBar, Toolbar, IconButton, Link as A } from '@material-ui/core';
import { makeStyles, withStyles, styled } from '@material-ui/core/styles';
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
    backgroundColor: '#f8f8f8',
  },
  carousel: {
    height: '100vh',
    '& .control-dots .dot': {
      background: 'rgba(0, 0, 0, .2)',
      boxShadow: 'none',
    },
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

// FIXME use src-set
const slides = [
  {
    title: 'Для дома',
    link: '/home',
    image: '/main-home-bg.jpg',
    text:
      'Интерьерные системы очистки водуха NEW//BREEZE - это компактные, встроенные в корпус небольших тумб технологичные устройства, обеспечивающие очистку воздуха в помещении до уровня  требуемого в медицине, фармакологии и хирургии. Сверхвысокая производительность обеспечивает  быструю и качественную очистку воздушной смеси (воздуха), а фильтры класса HEPA гарантируют  безопасность и результат.  Широкий выбор внешней отделки устройств подойдёт тем, кто заботится о внешнем виде своего жилья и уделяет дизайну помещения не последнюю роль.',
  },
  {
    title: 'Для салонов красоты',
    link: '/beauty-salon',
    image: '/main-salon-bg.jpg',
    text:
      'Защита клиента и мастера, а также очистка воздуха во всём помещении салона красоты всего одним устройством. Собирает пыль от гель-лаков и ногтевой напил, волосяную пыль. Готовые решения и индивидуальный проект с соблюдением условий дизайна вашего интерьера. Компактно, недорого, функционально и производительно. Ваши клиенты в безопасности, а значит довольны. Системы NEW//BREEZE это показатель вашего уровня, заботы о сотрудниках и клиентах, повышение КПД, увеличение прибыли.',
  },
  {
    title: 'Для маникюра',
    link: '/manicure',
    image: '/main-manicure-bg.jpg',
    text:
      'Защита клиента и мастера, а также очистка воздуха во всём помещении салона красоты всего одним устройством. Собирает пыль от гель-лаков и ногтевой напил, волосяную пыль. Готовые решения и индивидуальный проект с соблюдением условий дизайна вашего интерьера. Компактно, недорого, функционально и производительно. Ваши клиенты в безопасности, а значит довольны. Системы NEW//BREEZE это показатель вашего уровня, заботы о сотрудниках и клиентах, повышение КПД, увеличение прибыли.',
  },
  {
    title: 'Для барбер шопов',
    link: '/barbershop',
    image: '/main-barber-bg.jpg',
    text:
      'Защита клиента и мастера, а также очистка воздуха во всём помещении салона красоты всего одним устройством. Собирает пыль от гель-лаков и ногтевой напил, волосяную пыль. Готовые решения и индивидуальный проект с соблюдением условий дизайна вашего интерьера. Компактно, недорого, функционально и производительно. Ваши клиенты в безопасности, а значит довольны. Системы NEW//BREEZE это показатель вашего уровня, заботы о сотрудниках и клиентах, повышение КПД, увеличение прибыли.',
  },
  {
    title: 'Для ресторанов',
    link: '/restaurant',
    image: '/main-restaurant-bg.jpg',
    text:
      'Безопасность ваших клиентов является приоритетом, поэтому мы оснастили системы NEW//BREEZE  долговечными фильтрами самого высокого класса по очень приятной и доступной стоимости. Широкий спектр применения в ресторанном бизнесе и в кальянных. Индивидуальный проект и возможность встраивания в различные поверхности',
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
              {slides.map(({ title, link, text, image }, index) => {
                return (
                  <SlideContainer key={index} image={image}>
                    <SlideContent>
                      <SlideHeading variant="h2" gutterBottom>
                        {title}
                      </SlideHeading>
                      <SlideParagraph>{text}</SlideParagraph>
                      <Link href={link}>
                        <SlideButton color="primary" variant="contained" size="large">
                          Подробнее
                        </SlideButton>
                      </Link>
                    </SlideContent>
                  </SlideContainer>
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
    width: 100,
    lineHeight: '180px',
    textAlign: 'center',
    cursor: 'pointer',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: '#ffffff',
    fontSize: '6rem',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    [mediaQuery([{ maxWidth: 630 }, { maxHeight: 555 }])]: {
      display: 'none',
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

const SlideContainer = styled(Box)(({ image }) => ({
  backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
  backgroundSize: 'cover',
  height: '100vh',
  paddingTop: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  position: 'relative',
}));

const SlideContent = styled(Box)(() => ({
  textAlign: 'left',
  width: '60%',
  [mediaQuery([{ maxWidth: 630 }, { maxHeight: 555 }])]: {
    width: '90%',
  },
}));

const SlideButton = withStyles((theme) => ({
  root: {
    fontSize: '1.2rem',
    fontWeight: '300',
    padding: theme.spacing(2, 4),
    [mediaQuery([{ maxWidth: 1550 }, { maxHeight: 660 }])]: {
      fontSize: '1rem',
      padding: theme.spacing(1, 3),
    },
    [mediaQuery([{ maxWidth: 1000 }, { maxHeight: 400 }])]: {
      fontSize: '0.8rem',
      padding: theme.spacing(1, 2),
    },
    [mediaQuery([{ maxWidth: 400 }, { maxHeight: 380 }])]: {
      fontSize: '0.6rem',
    },
  },
}))(Button);

const SlideHeading = withStyles({
  root: {
    [mediaQuery([{ maxWidth: 1550 }, { maxHeight: 660 }])]: {
      fontSize: '3rem',
    },
    [mediaQuery([{ maxWidth: 1000 }, { maxHeight: 400 }])]: {
      fontSize: '2rem',
    },
    [mediaQuery([{ maxWidth: 400 }, { maxHeight: 380 }])]: {
      fontSize: '1.2rem',
    },
  },
})(Typography);

const SlideParagraph = withStyles((theme) => ({
  root: {
    fontSize: '1.5rem',
    fontWeight: '300',
    lineHeight: '1.6em',
    marginBottom: theme.spacing(4),
    [mediaQuery([{ maxWidth: 1550 }, { maxHeight: 660 }])]: {
      fontSize: '1.2rem',
      marginBottom: theme.spacing(2),
    },
    [mediaQuery([{ maxWidth: 1000 }, { maxHeight: 400 }])]: {
      fontSize: '1rem',
    },
    [mediaQuery([{ maxWidth: 400 }, { maxHeight: 380 }])]: {
      fontSize: '0.8rem',
    },
  },
}))(Typography);
