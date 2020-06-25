import React from 'react';
import Layout from '../../components/Layout';
import AppBar from '../../components/AppBar';
import { Typography, Container, Box, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';
import classnames from 'classnames';

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

export default function Abount() {
  const classes = useStyles();

  return (
    <Layout title="NEW///BREEZE — контакты">
      <>
        <AppBar />
        <Box classes={{ root: classes.container }}>
          <Section>
            <Grid container>
              <Grid item xs={8}></Grid>
            </Grid>
          </Section>
        </Box>
      </>
    </Layout>
  );
}
