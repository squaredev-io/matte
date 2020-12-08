import React from 'react'
import {
  Table as MuiTable,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { IconButton } from '../../inputs/button/button.component'
import { MoreVertical } from 'react-feather'
import { Menu, MenuItem } from '../../navigation/menu/menu.component'

/**
 * Interface for a table's column
 */
export interface Column<DataType> {
  /**
   * The text appears at the header cell of the column
   */
  title: string
  /**
   * The name of the field for this column
   */
  field: keyof DataType
  /**
   * If set, text within cells in this column, becomes a link
   */
  link?: boolean
}

/**
 * Adds "to" property in the data provided to the table, so it can be used as a link
 */
// TODO: Make this more generic and required for Table component
export type TableData<DataType> = (DataType & { to?: string })[]

export interface TableProps<DataType> {
  /**
   * An array of objects containing the `title` and the `field` name of the column.
   * For example: `{title: 'Name', field: 'name'}`.
   */
  columns: Column<DataType>[]
  /**
   * An array of objects representing the rows of the table. For example:
   * `{ index: 1, name: 'Daenerys', surname: 'Targaryen', birthYear: 1977 }`.
   * Each property of this object must exist as `field` in `columns`. If `link`
   * is set in `columns`, `to` must be given a url to follow.
   */
  data: TableData<DataType>
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
  actions?: MenuItem[]
}

/**
 * Inject styles for Table
 * @param theme The theme in use
 */
const useStyles = makeStyles<Theme>(({ palette }) =>
  createStyles({
    headerCell: {
      color: palette.grey[700],
      fontSize: '.75rem',
      textTransform: 'uppercase',
      padding: 14,
    },
    cell: {
      padding: 14,
    },
    link: {
      color: palette.primary.main,
      textDecoration: 'none',
      backgroundColor: 'transparent',
      '&:hover': {
        color: palette.primary.dark,
      },
    },
    actions: {
      padding: 8,
    },
  })
)

/**
 * Tables display information in a grid-like format of rows and columns and provide
 * ways to query and manipulate data so that users can look for patterns and insights.
 */
export const Table = <DataType extends any>({
  columns,
  data,
  actions,
}: TableProps<DataType>) => {
  const classes = useStyles()

  // Create anchor for actions menu that will appear in each row
  const anchor = <IconButton icon={<MoreVertical />} />

  return (
    <>
      <MuiTable className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col, cellIndex) => (
              <TableCell className={classes.headerCell} key={cellIndex}>
                {col.title}
              </TableCell>
            ))}
            {actions && <TableCell>&nbsp;</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow hover key={rowIndex}>
              {columns.map((col, i) => (
                <TableCell className={classes.cell} key={i}>
                  {col.link ? (
                    <Link className={classes.link} to={row.to as string}>
                      {row[col.field]}
                    </Link>
                  ) : (
                    row[col.field]
                  )}
                </TableCell>
              ))}
              {actions && (
                <TableCell align="right" className={classes.actions}>
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
  )
}
