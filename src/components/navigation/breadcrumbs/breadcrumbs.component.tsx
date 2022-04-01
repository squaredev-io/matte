import React, { FC } from 'react';
import styles from './breadcrumbs.module.scss';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';

export interface BreadcrumbsProps {
  /**
   * The links of the breadcrumps, typically `Links` or a `span` for
   * the last breadcrump.
   */
  children: React.ReactNode;
}

/**
 * Breadcrumps are useful to move around pages with hierarchically
 * related content (or find your way back when lost in the woods 🐺).
 */
export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {
  return (
    <MuiBreadcrumbs
      className={styles.breadcrumbs}
      sx={{
        '& a': {
          color: 'primary.main',
          '&:hover': {
            color: 'primary.dark',
          },
        },
      }}
    >
      {children}
    </MuiBreadcrumbs>
  );
};
