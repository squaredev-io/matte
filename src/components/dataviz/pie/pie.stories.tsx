import makeStyles from '@mui/styles/makeStyles';
import { Pie } from './pie.component';
import { Card, CardBody } from '../../structures/card/card.component';

export default {
  title: 'Components/Dataviz/Pie',
  component: Pie,
  parameters: {
    componentSubtitle:
      'Pie charts express portions of a whole, using arcs or angles within a circle.',
  },
};

const useStyles = makeStyles({
  chart: {
    width: '100%',
    height: '450px',
  },
});

export const PieCharts = () => {
  const classes = useStyles();
  const data = [
    {
      id: 'scala',
      label: 'scala',
      value: 465,
    },
    {
      id: 'ruby',
      label: 'ruby',
      value: 89,
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 426,
    },
    {
      id: 'rust',
      label: 'rust',
      value: 552,
    },
    {
      id: 'java',
      label: 'java',
      value: 394,
    },
  ];

  // @ts-ignore
  const radialLabelFn = (d) => `${d.id}: ${d.value}%`;

  return (
    <Card
      title="Repositories by language"
      subtitle="Rust seems to be the most used programming language for 2020"
    >
      <CardBody className={classes.chart}>
        <Pie data={data} radialLabel={radialLabelFn} />
      </CardBody>
    </Card>
  );
};

/**
 * A simple pie chart. To create a simple pie chart set `innerRadius` to zero.
 */
export const Simple = () => {
  const classes = useStyles();
  const data = [
    {
      id: 'scala',
      label: 'scala',
      value: 465,
    },
    {
      id: 'ruby',
      label: 'ruby',
      value: 89,
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 426,
    },
    {
      id: 'rust',
      label: 'rust',
      value: 552,
    },
    {
      id: 'java',
      label: 'java',
      value: 394,
    },
  ];

  // @ts-ignore
  const radialLabelFn = (d) => `${d.id}: ${d.value}%`;

  return (
    <div className={classes.chart}>
      <Pie data={data} innerRadius={0} radialLabel={radialLabelFn} />
    </div>
  );
};

/**
 * A donut chart. Donut charts are generally preferreed over simple pie charts.
 */
export const Donut = () => {
  const classes = useStyles();
  const data = [
    {
      id: 'scala',
      label: 'scala',
      value: 465,
    },
    {
      id: 'ruby',
      label: 'ruby',
      value: 89,
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 426,
    },
    {
      id: 'rust',
      label: 'rust',
      value: 552,
    },
    {
      id: 'java',
      label: 'java',
      value: 394,
    },
  ];

  // @ts-ignore
  const radialLabelFn = (d) => `${d.id}: ${d.value}%`;

  return (
    <div className={classes.chart}>
      <Pie data={data} radialLabel={radialLabelFn} />;
    </div>
  );
};
