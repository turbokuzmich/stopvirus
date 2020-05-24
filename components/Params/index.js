import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: (gutterBottom) => ({
    marginBottom: theme.spacing(gutterBottom ? 2 : 1),
  }),
  title: {
    width: '63%',
    display: 'inline-block',
    color: theme.palette.text.secondary,
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
    position: 'relative',
    marginRight: '2.5%',
    '&::after': {
      display: 'block',
      content: '""',
      width: '100%',
      position: 'absolute',
      borderBottom: `1px dashed ${theme.palette.grey['500']}`,
      bottom: 6,
    },
  },
  titleWrapper: {
    fontWeight: 'normal',
    padding: theme.spacing(0, 2, 0, 0),
    backgroundColor: theme.palette.grey['50'],
    zIndex: 1,
    position: 'relative',
  },
  value: {
    width: '33%',
    display: 'inline-block',
    fontWeight: 700,
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },
}));

export default function Param({ title, value, gutterBottom, classes }) {
  const intClasses = useStyles(gutterBottom);

  return (
    <div className={classnames(intClasses.root, classes.root)}>
      <span className={classnames(intClasses.title, classes.title)}>
        <b className={classnames(intClasses.titleWrapper, classes.titleWrapper)}>{title}</b>
      </span>
      <span className={classnames(intClasses.value, classes.value)}>{value}</span>
    </div>
  );
}

Param.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  gutterBottom: PropTypes.boolean,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    titleWrapper: PropTypes.string,
    value: PropTypes.string,
  }),
};

Param.defaultProps = {
  classes: {},
  gutterBottom: false,
};
