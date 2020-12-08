import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Column, TableData } from './table.component';
import { CardBody, Card } from '../../structures/card/card.component';
import { Edit, Delete } from '@material-ui/icons';

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
 * You can wrap tables with a `Card` for better looks.
 */
export const ContainedTable = () => {
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
      >
        <CardBody>
          <Table<MockData> columns={columns} data={data} />
        </CardBody>
      </Card>
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
