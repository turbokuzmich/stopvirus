import React from 'react';
import Layout from '../../components/Layout';
import AppBar from '../../components/AppBar';
import Viewer from '../../components/3dViewer';
import { Typography, Container, Box, Button, Grid, Link as A, Hidden } from '@material-ui/core';
import ParamBase from '../../components/Params';
import Link from 'next/link';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';
import getStaticUrl from '../../utils/static';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 64,
    fontSize: '1.2rem',
  },
  hero: {
    background: `linear-gradient(21deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%), url(${getStaticUrl('main-home-bg-2000w.jpg')})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: '#fff',
    padding: theme.spacing(8, 0),
  },
  viewerContainer: {
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
}));

const T = withStyles({
  h1: {
    fontWeight: 700,
    fontSize: '3rem',
    fontFamily: 'Roboto, sans-serif',
  },
  h3: {
    fontSize: '2rem',
  },
  h4: {
    fontSize: '1.5rem',
  },
  body1: {
    fontSize: '1.2rem',
  },
})(Typography);

const Param = withStyles({
  root: {
    fontSize: '1.2rem',
  },
})(ParamBase);

const Section = withStyles((theme) => ({
  root: ({ gutterTop = true, gutterBottom = false }) => ({
    paddingTop: gutterTop ? theme.spacing(6) : 0,
    paddingBottom: gutterBottom ? theme.spacing(6) : 0,
  }),
}))((props) => <Container {...omit(props, ['gutterTop', 'gutterBottom'])} />);

const BuyButton = withStyles((theme) => ({
  root: {
    padding: '16px 51px',
    margin: theme.spacing(2, 0, 0),
  },
}))(Button);

export default function Home() {
  const classes = useStyles();

  return (
    <Layout title="NEW///BREEZE — для дома">
      <>
        <AppBar />
        <Box classes={{ root: classes.container }}>
          <Box classes={{ root: classes.hero }}>
            <Container>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <T variant="h1" gutterBottom>
                    Для дома
                  </T>
                  <T variant="body1" paragraph>
                    Интерьерные системы очистки водуха NEW//BREEZE&nbsp;&mdash; это компактные, встроенные в&nbsp;корпус
                    небольших тумб технологичные устройства, обеспечивающие очистку воздуха в&nbsp;помещении
                    до&nbsp;уровня требуемого в&nbsp;медицине, фармакологии и&nbsp;хирургии. Сверхвысокая
                    производительность обеспечивает быструю и&nbsp;качественную очистку воздушной смеси (воздуха),
                    а&nbsp;фильтры класса HEPA гарантируют безопасность и&nbsp;результат. Широкий выбор внешней отделки
                    устройств подойдёт тем, кто заботится о&nbsp;внешнем виде своего жилья и&nbsp;уделяет дизайну
                    помещения не&nbsp;последнюю роль.
                  </T>
                  <Link href="/order">
                    <BuyButton color="primary" variant="contained" size="large">
                      Заказать
                    </BuyButton>
                  </Link>
                </Grid>
                <Hidden implementation="css" smDown={true}>
                  <Grid item xs={false} md={6}>
                    {/* Картинка */}
                  </Grid>
                </Hidden>
              </Grid>
            </Container>
          </Box>
          <Section>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className={classes.viewerContainer}>
                  <Viewer
                    folder={getStaticUrl('rotate/1s/')}
                    filename="{index}.jpg"
                    amount={143}
                    magnifier={3}
                    speed={300}
                    autoplay
                    reverse
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <T variant="h3" gutterBottom>
                  Технические характеристики
                </T>
                <T paragraph>
                  Корпус изделия выполнен из&nbsp;ЛДСП &laquo;ЭГГЕР&raquo; (Австрия), различной цветовой палитры, либо
                  с&nbsp;возможностью подбора индивидуального цветового решения относительно вашего интерьера.
                </T>
                <T variant="h4" paragraph>
                  Общие
                </T>
                <Param title="Уровень шума, дБ" value="35–41" />
                <Param title="Высота, мм" value="602–612" />
                <Param title="Ширина, мм" value="407" />
                <Param title="Глубина, мм" value="418" />
                <Param title="Толщина стенок, мм" value="16–18" gutterBottom />
                <T variant="h4" paragraph>
                  Двигатель
                </T>
                <Param title="Рабочий механизм" value="осевой" />
                <Param title="Мощность, Вт" value="200" />
                <Param title="Воздухообмен, м³/час" value="1210" />
                <Param title="Влагозащита" value="есть" />
                <Param title="Вес, кг" value="6.2" gutterBottom />
                <T variant="h4" paragraph>
                  Фильтры
                </T>
                <T paragraph component="ul">
                  <T component="li">
                    <Link href="/filters#filtek" passHref>
                      <A>ФилТек</A>
                    </Link>
                  </T>
                  <T component="li">
                    <Link href="/filters#f8" passHref>
                      <A>Фильтры тонкой очистки воздуха F8</A>
                    </Link>
                  </T>
                  <T component="li">
                    <Link href="/filters#hepa" passHref>
                      <A>Класс фильтра: HEPA Н13, H14</A>
                    </Link>
                  </T>
                </T>
              </Grid>
            </Grid>
          </Section>
        </Box>
      </>
    </Layout>
  );
}
