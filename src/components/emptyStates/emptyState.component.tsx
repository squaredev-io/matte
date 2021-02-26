import React, { FC, MouseEventHandler } from 'react';
import { Container, makeStyles, createStyles } from '@material-ui/core';
import { Grid } from '../layout/grid/grid.component';
import { Button } from '../inputs/button/button.component';
import { Plus } from 'react-feather';

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

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
    },
    description: {
      textAlign: 'center',
    },
    button: {
      textAlign: 'center',
    },
    illustration: {
      textAlign: 'center',
      width: '100%',
      '& img': {
        width: '100%',
        height: 'auto',
        maxWidth: 450,
      },
    },
  })
);

/**
 * Use empty states when there is no data to display to the user.
 */
export const EmptyState: FC<EmptyStateProps> = ({
  btnTxt,
  className,
  description,
  illustration = 'undraw_not_found_60pq.svg',
  onClick: handleClick,
  tagline,
  to,
}) => {
  const classes = useStyles();
  return (
    <Container className={`${classes.container} ${className}`} fixed>
      <Grid className={classes.container} container spacing={3}>
        <Grid item xs={6}>
          <div className={classes.illustration}>
            <img src={illustration} />
          </div>
          <h2 className={classes.title}>{tagline}</h2>
          <p className={classes.description}>{description}</p>
          {btnTxt && (
            <div className={classes.button}>
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
