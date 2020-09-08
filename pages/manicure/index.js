import React from 'react';
import Layout from '../../components/Layout';
import AppBar from '../../components/AppBar';
import Viewer from '../../components/3dViewer';
import { Typography, Container, Box, Button, Grid, Link as A } from '@material-ui/core';
import ParamBase from '../../components/Params';
import Link from 'next/link';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';
import red from '@material-ui/core/colors/red';

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
  reference: {
    color: red['A700'],
  },
  viewerContainer: {
    paddingRight: theme.spacing(2),
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
    <Layout title="NEW///BREEZE — для маникюра и педикюра">
      <>
        <AppBar />
        <Box classes={{ root: classes.container }}>
          <Box classes={{ root: classes.hero }}>
            <Container>
              <Grid container>
                <Grid item xs={6}>
                  <T variant="h1" gutterBottom>
                    Для маникюра и педикюра
                  </T>
                  <T variant="body1" paragraph>Защита клиента и&nbsp;мастера, а&nbsp;также очистка воздуха во&nbsp;всём помещении салона красоты всего одним устройством. Собирает пыль от&nbsp;гель-лаков и&nbsp;ногтевой напил, волосяную пыль. Готовые решения и&nbsp;индивидуальный проект с&nbsp;соблюдением условий дизайна вашего интерьера. Компактно, недорого, функционально и&nbsp;производительно. Ваши клиенты в&nbsp;безопасности, а&nbsp;значит довольны. Системы NEW//BREEZE это показатель вашего уровня, заботы о&nbsp;сотрудниках и&nbsp;клиентах, повышение КПД, увеличение прибыли.</T>
                  <Link href="/order">
                    <BuyButton color="primary" variant="contained" size="large">
                      Заказать
                    </BuyButton>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Section>
            <Grid container>
              <Grid item xs={6}>
                <div className={classes.viewerContainer}>
                  <Viewer
                    folder="/rotate/1s/"
                    filename="{index}.jpg"
                    amount={143}
                    magnifier={3}
                    speed={300}
                    autoplay
                    reverse
                  />
                </div>
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
                <Param
                  title="Высота, мм"
                  value={
                    <span>
                      602–1082<sup className={classes.reference}>*</sup>
                    </span>
                  }
                />
                <Param title="Ширина, мм" value="407" />
                <Param title="Глубина, мм" value="418" />
                <Param title="Толщина стенок, мм" value="16–18" gutterBottom />
                <T paragraph variant="body2">
                  <sup className={classes.reference}>*</sup>&nbsp;&mdash; модификация сверхвысокой мощности
                  &laquo;ЦИКЛОН-F250&raquo;
                </T>
                <T variant="h4" paragraph>
                  Двигатель
                </T>
                <Param title="Рабочий механизм" value="осевой" />
                <Param title="Мощность, Вт" value={<span>150&ndash;200</span>} />
                <Param title="Воздухообмен, м³/час" value={<span>870&ndash;1210</span>} />
                <Param title="Влагозащита" value="есть" />
                <Param title="Вес вне конструкции, кг" value={<span>4.5&ndash;6.2</span>} gutterBottom />
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
                </T>
              </Grid>
            </Grid>
          </Section>
        </Box>
      </>
    </Layout>
  );
}
