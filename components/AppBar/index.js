import React, { useState } from 'react';
import Logo, { logoSize } from '../../components/Logo/Wide';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import Menu from '../Menu';
import { AppBar, Toolbar, IconButton, Link as A } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
    backgroundColor: '#f0f0f0',
  },
  appBarLogo: {
    position: 'relative',
    top: 4,
    marginLeft: theme.spacing(1),
    ...logoSize(190),
  },
  menuIcon: {
    fill: theme.palette.grey['600'],
  },
}));

export default function Bar() {
  const classes = useStyles();

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AppBar classes={{ root: classes.appBar }}>
        <Toolbar>
          <IconButton onClick={() => setMenuOpen(true)} disableFocusRipple>
            <MenuIcon classes={{ root: classes.menuIcon }} fontSize="large" />
          </IconButton>
          <Link href="/" passHref>
            <A>
              <Logo className={classes.appBarLogo} />
            </A>
          </Link>
        </Toolbar>
      </AppBar>
      <Menu open={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
