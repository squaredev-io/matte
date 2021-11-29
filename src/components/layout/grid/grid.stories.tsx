import makeStyles from '@mui/styles/makeStyles';
import { Grid } from './grid.component';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
  parameters: {
    componentSubtitle:
      'The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.',
  },
};

const useStyles = makeStyles({
  grid: {
    '& .MuiGrid-item': {
      border: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '8px',
      textAlign: 'center',
    },
  },
});

export const grid = () => {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>xs=12</div>
        </Grid>
        <Grid item xs={6}>
          <div>xs=6</div>
        </Grid>
        <Grid item xs={6}>
          <div>xs=6</div>
        </Grid>
        <Grid item xs={3}>
          <div>xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div>xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div>xs=3</div>
        </Grid>
        <Grid item xs={3}>
          <div>xs=3</div>
        </Grid>
      </Grid>
    </div>
  );
};
