import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import AppBar from '../../components/AppBar';
import NumberFormat from 'react-number-format';
import { Formik, Form, Field } from 'formik';
import { Typography, Container, Box, Grid, MenuItem, Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';
import csrf from '../../middlewares/csrf';
import cookies from '../../middlewares/cookies';
import * as yup from 'yup';
import property from 'lodash/property';

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
  button: {
    marginTop: theme.spacing(2),
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

const PhoneField = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format="+7 (###) ###-####"
      mask="_"
      allowEmptyFormatting
    />
  );
};

PhoneField.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const types = [
  {
    value: 'home',
    label: 'Для дома',
  },
  {
    value: 'beauty-salon',
    label: 'Для салона красоты',
  },
  {
    value: 'manicure',
    label: 'Для маникюра',
  },
  {
    value: 'barbershop',
    label: 'Для барбершопа',
  },
  {
    value: 'restaurant',
    label: 'Для ресторана',
  },
];

const schema = yup.object().shape({
  type: yup
    .mixed()
    .oneOf(types.map(property('value')), 'Пожалуйста, выберите тип')
    .required('Пожалуйста, выберите тип'),
  fio: yup.string().trim().min(2, 'Пожалуйста, укажите ФИО').required('Пожалуйста, укажите ФИО'),
  phone: yup.string().length(10, 'Пожалуйста, укажите правильный номер телефона'),
  email: yup
    .string()
    .email('Пожалуйста, укажите правильный адрес электронной почты')
    .required('Пожалуйста, укажите адрес электронной почты'),
});

export default function Order(props) {
  const classes = useStyles();
  const [data, setData] = useState(null);

  const initialValues = {
    type: 'home',
    fio: '',
    phone: '',
    email: '',
    comment: '',
    _csrf: props.token,
  };

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
              </Grid>
            </Grid>
            <Grid spacing={6} container>
              <Grid item xs={6}>
                {data === null ? (
                  <Formik initialValues={initialValues} validationSchema={schema} onSubmit={setData}>
                    {({ isSubmitting }) => (
                      <Form autoComplete="off" noValidate>
                        <Field
                          component={TextField}
                          name="type"
                          label="Для чего?"
                          variant="outlined"
                          autoComplete="off"
                          margin="normal"
                          fullWidth
                          required
                          select
                        >
                          {types.map((option) => (
                            <MenuItem key={option.label} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                        <Field
                          component={TextField}
                          name="fio"
                          label="ФИО"
                          variant="outlined"
                          autoComplete="off"
                          margin="normal"
                          fullWidth
                          required
                        />
                        <Field
                          component={TextField}
                          name="phone"
                          label="Телефон"
                          variant="outlined"
                          autoComplete="off"
                          margin="normal"
                          InputProps={{ inputComponent: PhoneField }}
                          fullWidth
                        />
                        <Field
                          component={TextField}
                          name="email"
                          label="Почта"
                          variant="outlined"
                          autoComplete="off"
                          margin="normal"
                          fullWidth
                          required
                        />
                        <Field
                          component={TextField}
                          name="comment"
                          label="Комментарий"
                          variant="outlined"
                          autoComplete="off"
                          margin="normal"
                          rows={4}
                          multiline
                          fullWidth
                        />
                        <Field name="_csrf" type="hidden" />
                        <Button
                          classes={{ root: classes.button }}
                          type="submit"
                          size="large"
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                        >
                          Заказать
                        </Button>
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                )}
              </Grid>
              <Grid item xs={6}>
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

Order.propTypes = {
  token: PropTypes.string.isRequired,
};

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
