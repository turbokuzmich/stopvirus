import React from 'react';
import Layout from '../../components/Layout';
import AppBar from '../../components/AppBar';
import { Typography, Container, Box, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';

const useStyles = makeStyles((theme) => ({
  container: {
    fontSize: '1.2rem',
    paddingTop: 59,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
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

const Section = withStyles((theme) => ({
  root: ({ gutterTop = true, gutterBottom = false }) => ({
    paddingTop: gutterTop ? theme.spacing(6) : 0,
    paddingBottom: gutterBottom ? theme.spacing(6) : 0,
  }),
}))((props) => <Container {...omit(props, ['gutterTop', 'gutterBottom'])} />);

export default function About() {
  const classes = useStyles();

  return (
    <Layout title="NEW///BREEZE — о нас">
      <>
        <AppBar />
        <Box className={classes.container}>
          <Section>
            <Grid container>
              <Grid item xs={12} md={8}>
                <T variant="h1" gutterBottom>
                  О нас
                </T>
                <T paragraph>
                  Мы&nbsp;заботимся о&nbsp;вас и&nbsp;здоровье ваших близких. Наша компания основана в&nbsp;2015 году
                  и&nbsp;внесена в&nbsp;международный каталог Московского экспортера (МЭЦ). Здоровье покупателей нашей
                  продукции является основополагающим приоритетом. Высокое качество, лаконичный и&nbsp;ненавязчивый
                  дизайн, приятная стоимость&nbsp;&mdash; то, чем мы&nbsp;готовы удивить даже самых требовательного
                  клиента. Офис подразделения NEW//BREEZE air sistems расположен в&nbsp;городе Москва,
                  а&nbsp;производство&nbsp;&mdash; в&nbsp;Москве и&nbsp;ближайшем Подмосковье. Наши партнёры являются
                  передовыми производителями фильтров сверхвысокой степени очистки воздуха, которые используются
                  в&nbsp;медицинской и&nbsp;фармацевтической промышленности, что также подчёркивает уровень выпускаемой
                  продукции.
                </T>
                <T paragraph>
                  NEW//BREEZE air sistem&nbsp;&mdash; первый в&nbsp;мире бренд, совмещающий красоту изделия, гармонично
                  дополняет любой интерьер и&nbsp;в&nbsp;комплексе с&nbsp;сверхвысокой производительностью очищает
                  воздух до&nbsp;уровня операционной. Выбор дизайна и&nbsp;декора под любое помещение, будь-то квартира,
                  дом, cалон красоты, офиc или ресторан.
                </T>
                <T paragraph>
                  Мы&nbsp;рады, что именно вы&nbsp;проявили интерес к&nbsp;нашей продукции. Здоровье
                  близких&nbsp;&mdash; наша забота.
                </T>
                <T paragraph>
                  Ждём вас в&nbsp;команде единомышленников
                  <br />
                  с&nbsp;уважением, команда NEW//BREEZE air sistems.
                </T>
              </Grid>
            </Grid>
          </Section>
        </Box>
      </>
    </Layout>
  );
}
