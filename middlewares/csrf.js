import csurf from 'csurf';

export default csurf({
  cookie: {
    httpOnly: true,
    sameSite: true,
  },
});
