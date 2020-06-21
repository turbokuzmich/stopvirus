import React from 'react';
import Layout from '../../components/Layout';
import AppBar from '../../components/AppBar';
import Menu from '../../components/Menu'
import { Typography, Container, Box, Button, Grid, Link as A } from '@material-ui/core';
import ParamBase from '../../components/Params';
import Link from 'next/link';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 64,
    fontSize: '1.2rem',
  },
  hero: {
    background: 'linear-gradient(21deg, rgba(59,59,59,1) 0%, rgba(204,204,204,1) 100%)',
    color: '#fff',
    padding: theme.spacing(8, 0),
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
    <Layout title="NEW///BREEZE — для ресторанов">
      <>
        <AppBar />
        <Menu />
        <Box classes={{ root: classes.container }}>
          <Box classes={{ root: classes.hero }}>
            <Container>
              <Grid container>
                <Grid item xs={6}>
                  <T variant="h1" gutterBottom>
                    Для ресторанов
                  </T>
                  <T variant="body1" paragraph>
                    Нужно более развернуто написать, чем же этот продукт так хорош для дома. А справа какую-нибудь
                    фотку. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Sagittis vitae et leo duis ut. Arcu cursus euismod quis viverra nibh
                    cras pulvinar. Urna molestie at elementum eu facilisis.
                  </T>
                  <BuyButton color="primary" variant="contained" size="large">
                    Заказать
                  </BuyButton>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Section>
            <Grid container>
              <Grid item xs={6}>
                <img src="https://via.placeholder.com/500x350" alt="Для дома" />
              </Grid>
              <Grid item xs={6}>
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
