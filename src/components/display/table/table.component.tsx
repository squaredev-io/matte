import React from 'react';
import { MoreVertical, Copy } from 'react-feather';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconButton } from '../../inputs/button/button.component';
import { Menu } from '../../navigation/menu/menu.component';
import type { MenuItemType } from '../../navigation/menu/menu.component';
import { MatteTheme } from '../../utilities/createMatteTheme.component';
import styles from './table.module.scss';

import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Box,
  TableSortLabel,
} from '@mui/material';

/**
 * Interface for a table's column
 */
export interface Column<DataType> {
  /**
   * The text that appears at the header cell of the column
   */
  title?: string;
  /**
   * The name of the field for this column
   */
  field?: keyof DataType;
  /**
   * The Link component of your router library of choice. If set, text within cells in this column, becomes a link.
   */
  routerLink?: any;
  /**
   * If set, when text in this cell is clicked, it will be copied to clipboard
   */
  enableCopyToClipboard?: boolean;
  /**
   * If true, a checkbox is shown
   */
  checkbox?: boolean;
}

/**
 * Adds "to" property in the data provided to the table, so it can be used as a link
 */
// TODO: Make this more generic and required for Table component
export type TableData<DataType> = (DataType & { to?: string } & {
  handleCopy?: React.MouseEventHandler;
})[];

export interface TableProps<DataType> {
  /**
   * If set, a menu with a list of actions is shown per row.
   * It must be an array of objects with the following properties:
   *
   * * `handleClick`: A function that will be executed on item's `onClick` method,
   * e.g. `(e) => console.log(e)`. Except for `e`, the React's synthetic event, `rowId`
   * is also available.
   * * `icon`: If set, an icon is showed before text.
   * * `text`: Item's text.
   */
  actions?: MenuItemType[];
  /**
   * An array of objects with the following properties:
   *
   * Name | Type | Description | Default
   * --- | --- | --- | ---
   * title* | string | The text that appears at the header cell of the column. | -
   * field* | keyof DataType | The name of the field for this column. | -
   * link | boolean | If set, text within cells in this column, becomes a link. | -
   * enableCopyToClipboard | boolean | If set, when text in this cell is clicked, it will be copied to clipboard. | -
   *
   */
  columns: Column<DataType>[];
  /**
   * An array of objects representing the rows of the table. For example:
   * `{ index: 1, name: 'Daenerys', surname: 'Targaryen', birthYear: 1977 }`.
   * Each property of this object must exist as `field` in `columns`. If `link`
   * is set in `columns`, `to` must be given a url to follow. If an empty string
   * is passed to `to` the link will be disabled. If `enableCopyToClipboard`
   * is set in `columns`, `handleOnCopy` must be passed a method to handle `onCopy` event.
   * Full example: `{ index: 1, name: 'Daenerys', surname: 'Targaryen', birthYear: 1977, to: '#', handleCopy: e => console.log(e) }`
   */
  data: TableData<DataType>;
  /**
   * If `true`, the table row will shade on hover.
   */
  hover?: boolean;
  /**
   * If `true`, odd rows will have a background color. Avoid using this with hover.
   */
  striped?: boolean;
  /**
   * A function to be invoked when the checkbox is checked in the header
   */
  handleSelectAll?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * An array to hold the index of the rows the checkbox is checked for
   */
  selected?: number[];
  /**
   * If `true`, sorting functionality will be applied.
   */
  sorting?: boolean;
  /**
   * Column field by which the sorting will be implemented.
   */
  orderBy?: string;
  /**
   * Order of the items, it can be either ascending (asc) or descending (desc).
   */
  order?: 'asc' | 'desc';
  /**
   * Function to implement the sorting of the items.
   */
  handleSorting?: (...args: any[]) => any;
}

const getCellContent = (row: any, col: any, selected: number[]) => {
  if (col.checkbox) {
    const isSelected = (index: number) => selected.indexOf(index) !== -1;
    const isRowSelected = isSelected(row.index);
    return (
      <Checkbox
        checked={isRowSelected}
        onChange={(e) => row.handleCheckChange(e, row.index)}
        className={styles.checkbox}
      />
    );
  }

  if (col.routerLink) {
    const Link = col.routerLink;
    return (
      <Link
        className={row.to ? styles.link : styles.linkDisabled}
        sx={{
          color: ({ palette }: MatteTheme) =>
            row.to ? 'primary.main' : palette.grey[600],
          '&:hover': {
            color: 'primary.dark',
          },
        }}
        to={row.to as string}
      >
        {row[col.field]}
      </Link>
    );
  }

  if (col.enableCopyToClipboard) {
    return (
      <CopyToClipboard text={row[col.field]} onCopy={row.handleCopy}>
        <span className={styles.copy}>
          {row[col.field]}
          <Box
            component="span"
            sx={{
              color: 'primary.main',
            }}
          >
            <IconButton className={styles.copy} icon={<Copy />} />
          </Box>
        </span>
      </CopyToClipboard>
    );
  }
  return row[col.field];
};

/**
 * Tables display information in a grid-like format of rows and columns and provide
 * ways to query and manipulate data so that users can look for patterns and insights.
 */
export const Table = <DataType extends any>({
  actions,
  columns,
  data,
  hover = true,
  striped = false,
  handleSelectAll,
  selected = [],
  sorting,
  orderBy,
  order,
  handleSorting,
}: TableProps<DataType>) => {
  // Create anchor for actions menu that will appear in each row
  const anchor = <IconButton icon={<MoreVertical />} />;

  return (
    <>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((col, cellIndex) => (
              <TableCell
                className={styles.headerCell}
                sx={{
                  color: ({ palette }) => palette.grey[600],
                }}
                key={cellIndex}
              >
                {col.checkbox ? (
                  <Checkbox
                    checked={data.length > 0 && selected.length === data.length}
                    onChange={handleSelectAll}
                    className={styles.checkbox}
                  />
                ) : sorting ? (
                  <TableSortLabel
                    active={orderBy === col.field}
                    direction={orderBy === col.field ? order : 'asc'}
                    onClick={(e) => handleSorting(e, col.field, order)}
                  >
                    {col.title}
                  </TableSortLabel>
                ) : (
                  col.title
                )}
              </TableCell>
            ))}
            {actions && <TableCell>&nbsp;</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              sx={{
                '&:nth-of-type(odd)': {
                  bgcolor: ({ palette }) =>
                    striped ? palette.grey[50] : 'transparent',
                },
              }}
              hover={hover}
              key={rowIndex}
            >
              {columns.map((col, i) => (
                <TableCell
                  className={styles.cell}
                  sx={{
                    color: ({ palette }) => palette.grey[600],
                    borderBottom: ({ palette }) =>
                      `1px solid ${palette.grey[200]}`,
                  }}
                  key={i}
                >
                  {getCellContent(row, col, selected)}
                </TableCell>
              ))}
              {actions && (
                <TableCell
                  align="right"
                  className={styles.actions}
                  sx={{
                    color: ({ palette }) => palette.grey[600],
                    borderBottom: ({ palette }) =>
                      `1px solid ${palette.grey[200]}`,
                  }}
                >
                  <Menu
                    anchor={anchor}
                    id={`menu-more-${rowIndex}`}
                    items={actions}
                    handleClickParams={[rowIndex]}
                    placement="bottom-end"
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </>
  );
};
