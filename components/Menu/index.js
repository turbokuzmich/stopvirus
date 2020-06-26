import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import constant from 'lodash/constant';
import { useRouter } from 'next/router';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { match } from 'path-to-regexp';
import { Drawer, MenuList, MenuItem } from '@material-ui/core';

const transformRoute = (spec) => Object.assign({}, spec, { match: spec.route ? match(spec.route) : constant(false) });

const routes = [
  {
    route: '/',
    title: 'главная',
  },
  {
    route: '/about',
    title: 'о нас',
  },
  {
    title: 'системы очистки',
  },
  {
    route: '/home',
    title: 'для дома',
    offset: true,
  },
  {
    route: '/beauty-salon',
    title: 'для салонов красоты',
    offset: true,
  },
  {
    route: '/manicure',
    title: 'для маникюра',
    offset: true,
  },
  {
    route: '/barbershop',
    title: 'для барбер шопов',
    offset: true,
  },
  {
    route: '/restaurant',
    title: 'для ресторанов',
    offset: true,
  },
  {
    route: '/filters',
    title: 'фильтры',
  },
  {
    route: '/order',
    title: 'заказать',
  },
  /*{
    route: '/contacts',
    title: 'контакты',
  },*/
].map(transformRoute);

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.background.default,
  },
}));

const Item = withStyles((theme) => ({
  root: ({ withOffset = false }) => ({
    textTransform: 'uppercase',
    paddingLeft: theme.spacing(withOffset ? 4 : 2),
  }),
}))((props) => <MenuItem {...omit(props, 'withOffset')} />);

export default function Menu({ open, onClose }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Drawer classes={{ paper: classes.drawer }} open={open} onClose={onClose}>
      <MenuList>
        {routes.map(({ title, route, match, offset }) => {
          const props = {
            selected: Boolean(match(router.pathname)),
            withOffset: offset,
          };

          if (route) {
            Object.assign(props, { onClick: () => router.push(route) });
          } else {
            Object.assign(props, { disabled: true });
          }

          return (
            <Item key={title} {...props}>
              {title}
            </Item>
          );
        })}
      </MenuList>
      <Item />
    </Drawer>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

Menu.defaultProps = {
  open: false,
  onClose: () => {},
};
