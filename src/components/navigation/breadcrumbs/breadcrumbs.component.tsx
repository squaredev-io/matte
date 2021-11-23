import React, { FC } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Theme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

export interface BreadcrumbsProps {
  /**
   * The links of the breadcrumps, typically `Links` or a `span` for
   * the last breadcrump.
   */
  children: React.ReactNode;
}

/**
 * Inject styles for Breadcrumps
 * @param theme The theme in use
 */
const useStyles = makeStyles<Theme>(({ palette }) =>
  createStyles({
    root: {
      fontSize: '.875rem',
      '& a': {
        color: palette.primary.main,
        textDecoration: 'none',
        backgroundColor: 'transparent',
        '&:hover': {
          color: palette.primary.dark,
        },
      },
    },
  }),
);

/**
 * Breadcrumps are useful to move around pages with hierarchically
 * related content (or find your way back when lost in the woods 🐺).
 */
export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {
  const classes = useStyles();
  return <MuiBreadcrumbs className={classes.root}>{children}</MuiBreadcrumbs>;
};
