import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { FormHelperText } from '@material-ui/core';
import init from './init';
import partial from 'lodash/partial';
import headScript from './headScript';
import { connect } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  captcha: {
    marginTop: theme.spacing(2),
  },
}));

function Captcha({ name = 'captcha', token, formik }) {
  const setCaptcha = partial(formik.setFieldValue, name);
  const id = `captcha-${name}`;
  const classes = useStyles();
  const { error, touched } = formik.getFieldMeta(name);

  useEffect(() => {
    init(id, token, setCaptcha);
  }, []);

  return (
    <div className={classes.captcha}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: headScript,
          }}
        />
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
          key="recaptcha"
          async
          defer
        />
      </Head>
      <div id={id}></div>
      {Boolean(error) && touched ? (
        <FormHelperText variant="filled" error>
          {error}
        </FormHelperText>
      ) : null}
    </div>
  );
}

Captcha.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
};

Captcha.defaultProps = {
  name: 'captcha',
};

export default connect(Captcha);
