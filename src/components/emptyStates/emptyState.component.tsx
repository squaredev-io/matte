import React, { FC, MouseEventHandler } from 'react';
import { Plus } from 'react-feather';
import { Button } from '../inputs/button/button.component';
import styles from './emptyState.module.scss';

import { Container, Grid } from '@mui/material';

export interface EmptyStateProps {
  /**
   * The text of the call-to-action button.
   */
  btnTxt?: string;
  /**
   * CSS class name
   */
  className?: string;
  /**
   * The content of the header.
   */
  description: string;
  /**
   * The path to the source of the illustration to use. If not supplied, a default illustrtion
   * will be used. Illustrations for this use can be found at [undraw.co](https://undraw.co).
   *
   * Hint: Use the colour #DFE0F5 to customise the illustrations before you download them.
   */
  illustration?: string;
  /**
   * On click handler.
   */
  onClick?: MouseEventHandler;
  /**
   * The React Router Link to follow when the button is pressed
   */
  tagline: string;
  /**
   * A description of the empty state to the user.
   */
  to?: string;
}

/**
 * Use empty states when there is no data to display to the user.
 */
export const EmptyState: FC<EmptyStateProps> = ({
  btnTxt,
  className,
  description,
  illustration = 'images/undraw_not_found_60pq.svg',
  onClick: handleClick,
  tagline,
  to,
}) => {
  return (
    <Container className={`${styles.container} ${className}`} fixed>
      <Grid className={styles.container} container spacing={3}>
        <Grid item xs={6}>
          <div className={styles.illustration}>
            <img src={illustration} />
          </div>
          <h2 className={styles.title}>{tagline}</h2>
          <p className={styles.description}>{description}</p>
          {btnTxt && (
            <div className={styles.button}>
              <Button
                icon={<Plus />}
                onClick={handleClick}
                to={to}
                variant="contained"
              >
                {btnTxt}
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
