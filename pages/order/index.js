import React from 'react';
import Layout from '../../components/Layout';
import AppBar from '../../components/AppBar';
import { Typography, Container, Box, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';
import csrf from '../../middlewares/csrf';
import cookies from '../../middlewares/cookies';

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

const Section = withStyles((theme) => ({
  root: ({ gutterTop = true, gutterBottom = false }) => ({
    paddingTop: gutterTop ? theme.spacing(6) : 0,
    paddingBottom: gutterBottom ? theme.spacing(6) : 0,
  }),
}))((props) => <Container {...omit(props, ['gutterTop', 'gutterBottom'])} />);

export default function Order() {
  const classes = useStyles();

  return (
    <Layout title="NEW///BREEZE — заказать">
      <>
        <AppBar />
        <Box classes={{ root: classes.container }}>
          <Section>
            <Grid container>
              <Grid item xs={8}>
                <T variant="h1" gutterBottom>
                  Заказ
                </T>
                <T paragraph>Для оформления заказа, пожалуйста, воспользуйтесь контактами ниже.</T>
                <T paragraph>
                  Телефон: <a href="tel:+79296490043">+7 929 649-00-43</a>
                </T>
                <T paragraph>
                  Почта: <a href="mailto:info@newbr.ru">info@newbr.ru</a>
                </T>
                <T paragraph>
                  <a href="https://wa.me/79296490043" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  ,{' '}
                  <a href="https://teleg.run/turbokuzmich" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </T>
              </Grid>
            </Grid>
          </Section>
        </Box>
      </>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  await runMiddleware(cookies, ctx);
  await runMiddleware(csrf, ctx);

  return {
    props: {
      token: ctx.req.csrfToken(),
    },
  };
}

async function runMiddleware(fn, ctx) {
  return new Promise((resolve, reject) => {
    fn(ctx.req, ctx.res, (error) => {
      if (error) {
        return reject(error);
      }

      resolve();
    });
  });
}
