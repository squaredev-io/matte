import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Table, Column, TableData } from './table.component';
import { CardBody, Card } from '../../structures/card/card.component';
import { Edit, Delete } from '@mui/icons-material';

export default {
  title: 'Components/Display/Table',
  component: Table,
  parameters: {
    componentSubtitle: 'Tables display sets of data across rows and columns.',
  },
};

const useStyles = makeStyles({
  table: {
    '& .MuiCard-root': {
      margin: '8px',
    },
  },
});

interface MockData {
  index: number;
  name: string;
  surname: string;
  birthYear: number;
  to?: string;
  handleCopy?: React.MouseEventHandler;
}

export const Tables = () => {
  const classes = useStyles();
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name', link: true },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth year', field: 'birthYear' },
  ];

  const data: MockData[] = [
    {
      index: 1,
      name: 'Daenerys',
      surname: 'Targaryen',
      birthYear: 1977,
      to: '#',
    },
    { index: 2, name: 'Jon', surname: 'Snow', birthYear: 1980, to: '#' },
    { index: 3, name: 'Arya', surname: 'Stark', birthYear: 1987, to: '#' },
  ];

  return (
    <div className={classes.table}>
      <Table<MockData> columns={columns} data={data} />
    </div>
  );
};

/**
 * When `striped` is set to true, odd rows will be shown with a background color
 */
export const Striped = () => {
  const classes = useStyles();
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth year', field: 'birthYear' },
  ];

  const data: MockData[] = [
    {
      index: 1,
      name: 'Daenerys',
      surname: 'Targaryen',
      birthYear: 1977,
    },
    { index: 2, name: 'Jon', surname: 'Snow', birthYear: 1980 },
    { index: 3, name: 'Arya', surname: 'Stark', birthYear: 1987 },
  ];

  return (
    <div className={classes.table}>
      <Table<MockData> columns={columns} data={data} striped hover={false} />
    </div>
  );
};

/**
 * By default hovering over a row, will change its background. You can disable this by setting `hover` to `false`.
 */
export const Hoverable = () => {
  const classes = useStyles();
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth year', field: 'birthYear' },
  ];

  const data: MockData[] = [
    {
      index: 1,
      name: 'Daenerys',
      surname: 'Targaryen',
      birthYear: 1977,
    },
    { index: 2, name: 'Jon', surname: 'Snow', birthYear: 1980 },
    { index: 3, name: 'Arya', surname: 'Stark', birthYear: 1987 },
  ];

  return (
    <div className={classes.table}>
      <Table<MockData> columns={columns} data={data} />
    </div>
  );
};

/**
 * Use `actions` property to pass a list of actions for each row.
 */
export const RowActions = () => {
  const classes = useStyles();
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name', link: true },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth year', field: 'birthYear' },
  ];

  const data: TableData<MockData> = [
    {
      index: 1,
      name: 'Daenerys',
      surname: 'Targaryen',
      birthYear: 1977,
      to: '#',
    },
    { index: 2, name: 'Jon', surname: 'Snow', birthYear: 1980, to: '#' },
    { index: 3, name: 'Arya', surname: 'Stark', birthYear: 1987, to: '#' },
  ];

  const actions = [
    {
      handleClick: (e, rowId) => rowId,
      icon: <Edit />,
      text: 'Edit',
    },
    {
      handleClick: (e, rowId) => rowId,
      icon: <Delete />,
      text: 'Delete',
    },
  ];

  return (
    <div className={classes.table}>
      <Table<MockData> columns={columns} data={data} actions={actions} />
    </div>
  );
};

/**
 * You can enable copy to clipbaoard for a column. Each cell of this column,
 * when hovered, will show a copy icon. When clicked, the content of
 * the cell will be copied to clipboard.
 */
export const copyToClipboard = () => {
  const classes = useStyles();
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name', enableCopyToClipboard: true },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth year', field: 'birthYear' },
  ];

  const data: MockData[] = [
    {
      index: 1,
      name: 'Daenerys',
      surname: 'Targaryen',
      birthYear: 1977,
      to: '#',
      handleCopy: (e) => console.log(e),
    },
    {
      index: 2,
      name: 'Jon',
      surname: 'Snow',
      birthYear: 1980,
      to: '#',
      handleCopy: (e) => console.log(e),
    },
    {
      index: 3,
      name: 'Arya',
      surname: 'Stark',
      birthYear: 1987,
      to: '#',
      handleCopy: (e) => console.log(e),
    },
  ];

  return (
    <div className={classes.table}>
      <Table<MockData> columns={columns} data={data} />
    </div>
  );
};

/**
 * You can wrap tables with a `Card` for better looks. Hint: Use `disableGutters` prop when wrapping a table with a card.
 */
export const TableInACard = () => {
  const classes = useStyles();
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name', link: true },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth year', field: 'birthYear' },
  ];

  const data: MockData[] = [
    {
      index: 1,
      name: 'Daenerys',
      surname: 'Targaryen',
      birthYear: 1977,
      to: '#',
    },
    { index: 2, name: 'Jon', surname: 'Snow', birthYear: 1980, to: '#' },
    { index: 3, name: 'Arya', surname: 'Stark', birthYear: 1987, to: '#' },
  ];

  return (
    <div className={classes.table}>
      <Card
        title="Basic table"
        subtitle="Those who fought against the Walkers."
        disableGutters
      >
        <CardBody>
          <Table<MockData> columns={columns} data={data} />
        </CardBody>
      </Card>
    </div>
  );
};
