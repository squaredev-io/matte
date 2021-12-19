import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '@mui/material/Link';
import { Edit, Trash2 } from 'react-feather';
import { Table, Column, TableData } from './table.component';
import { CardBody, Card } from '../../structures/card/card.component';

export default {
  title: 'Components/Display/Table',
  component: Table,
  parameters: {
    componentSubtitle: 'Tables display sets of data across rows and columns.',
  },
} as ComponentMeta<typeof Table>;

interface MockData {
  index: number;
  name: string;
  surname: string;
  birthYear: number;
  to?: string;
  handleCopy?: React.MouseEventHandler;
  handleCheckChange?: (e: React.MouseEvent<unknown>, rowId: number) => void;
}

export const Tables: ComponentStory<typeof Table> = () => {
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name', routerLink: Link },
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
    {
      index: 2,
      name: 'Jon',
      surname: 'Snow',
      birthYear: 1980,
      to: '#',
    },
    {
      index: 3,
      name: 'Arya',
      surname: 'Stark',
      birthYear: 1987,
      to: '#',
    },
  ];

  return (
    <div className="story__table">
      <Table<MockData> columns={columns} data={data} />
    </div>
  );
};

/**
 * When `striped` is set to true, odd rows will be shown with a background color
 */
export const Striped: ComponentStory<typeof Table> = () => {
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
    <div className="story__table">
      <Table<MockData> columns={columns} data={data} striped hover={false} />
    </div>
  );
};

/**
 * By default hovering over a row, will change its background. You can disable this by setting `hover` to `false`.
 */
export const Hoverable: ComponentStory<typeof Table> = () => {
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
    <div className="story__table">
      <Table<MockData> columns={columns} data={data} />
    </div>
  );
};

/**
 * Use `actions` property to pass a list of actions for each row.
 */
export const RowActions: ComponentStory<typeof Table> = () => {
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name', routerLink: Link },
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
      handleClick: console.log,
      icon: <Edit />,
      text: 'Edit',
    },
    {
      handleClick: console.log,
      icon: <Trash2 />,
      text: 'Delete',
    },
  ];

  return (
    <div className="story__table">
      <Table<MockData> columns={columns} data={data} actions={actions} />
    </div>
  );
};

/**
 * You can enable copy to clipbaoard for a column. Each cell of this column,
 * when hovered, will show a copy icon. When clicked, the content of
 * the cell will be copied to clipboard.
 */
export const copyToClipboard: ComponentStory<typeof Table> = () => {
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
      handleCopy: console.log,
    },
    {
      index: 2,
      name: 'Jon',
      surname: 'Snow',
      birthYear: 1980,
      to: '#',
      handleCopy: console.log,
    },
    {
      index: 3,
      name: 'Arya',
      surname: 'Stark',
      birthYear: 1987,
      to: '#',
      handleCopy: console.log,
    },
  ];

  return (
    <div className="story__table">
      <Table<MockData> columns={columns} data={data} />
    </div>
  );
};

/**
 * You can wrap tables with a `Card` for better looks. Hint: Use `disableGutters` prop when wrapping a table with a card.
 */
export const TableInACard: ComponentStory<typeof Table> = () => {
  const columns: Column<MockData>[] = [
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name', routerLink: Link },
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
    <div className="story__table">
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

export const SelectingRows: ComponentStory<typeof Table> = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.index);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleCheckClick = (e: React.MouseEvent<unknown>, rowId: number) => {
    const selectedIndex = selected.indexOf(rowId);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, rowId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const columns: Column<MockData>[] = [
    { checkbox: true },
    { title: '#', field: 'index' },
    { title: 'Name', field: 'name', routerLink: Link },
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
      handleCheckChange: handleCheckClick,
    },
    {
      index: 2,
      name: 'Jon',
      surname: 'Snow',
      birthYear: 1980,
      to: '#',
      handleCheckChange: handleCheckClick,
    },
    {
      index: 3,
      name: 'Arya',
      surname: 'Stark',
      birthYear: 1987,
      to: '#',
      handleCheckChange: handleCheckClick,
    },
  ];
  return (
    <div className="story__table">
      <Table<MockData>
        columns={columns}
        data={data}
        handleSelectAll={handleSelectAll}
        selected={selected}
      />
    </div>
  );
};
