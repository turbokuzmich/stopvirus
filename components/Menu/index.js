import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Drawer, MenuList, MenuItem } from '@material-ui/core';

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

  return (
    <Drawer classes={{ paper: classes.drawer }} open={open} onClose={onClose}>
      <MenuList>
        <Item>главная</Item>
        <Item>о нас</Item>
        <Item disabled>системы очистки</Item>
        <Item withOffset>для дома</Item>
        <Item withOffset>для салонов красоты</Item>
        <Item withOffset>для маникюра</Item>
        <Item withOffset>для барбер шопов</Item>
        <Item withOffset>для ресторанов</Item>
        <Item>заказать</Item>
        <Item>контакты</Item>
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
