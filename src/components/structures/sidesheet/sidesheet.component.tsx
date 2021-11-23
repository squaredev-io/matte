import React, { FC } from 'react'
import Drawer from '@mui/material/Drawer'
import { Box, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { IconButton } from '../../inputs/button/button.component'
import { Close } from '@mui/icons-material'

/**
 * Inject styles for Sidesheet
 */
const useStyles = makeStyles(() =>
  createStyles({
    paperAnchorRight: {
      width: '25vw',
      minWidth: 320,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      '& form': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
    },
    header: {
      fontWeight: 500,
    },
    actions: {
      '& :not(:first-child)': {
        marginLeft: 8,
      },
    },
  })
)

export interface SidesheetProps {
  /**
   * The content of the sidebar
   */
  children: React.ReactNode
  /**
   * Whether sidesheet should be open
   */
  open: boolean
  /**
   * Sidesheet's title
   */
  title?: string
  /**
   * Function that toggles sidesheet visibility
   */
  toggleSidesheet(event: React.MouseEvent<HTMLButtonElement>): void
}

/**
 * Actions area for card
 * @param children The contents of the component
 */
export const SidesheetActions: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Box
      className={classes.actions}
      display="flex"
      justifyContent="flex-end"
      px={2}
      py={1}
    >
      {children}
    </Box>
  )
}
/**
 * Main body of the card
 * @param children The contents of the component
 */
export const SidesheetBody: FC = ({ children }) => (
  <Box flexGrow={1} p={2}>
    {children}
  </Box>
)

export const SidesheetHeader: FC = ({ children }) => {
  const classes = useStyles()

  const text = React.Children.toArray(children)?.find(
    ({ type }: any) => type === 'span'
  )

  const icon = React.Children.toArray(children)?.find(
    ({ type }: any) => type === IconButton
  )

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Typography className={classes.header} component="h6">
        {text}
      </Typography>
      {icon}
    </Box>
  )
}

export const Sidesheet: FC<SidesheetProps> = ({
  children,
  open,
  title,
  toggleSidesheet,
}) => {
  const classes = useStyles()

  return (
    <Drawer
      anchor="right"
      classes={{
        paperAnchorRight: classes.paperAnchorRight,
      }}
      elevation={0}
      open={open}
      onClose={toggleSidesheet}
    >
      <Box display="flex" justifyContent="space-between" p={2}>
        <Typography className={classes.header} component="h6">
          {title}
        </Typography>
        <IconButton icon={<Close />} onClick={toggleSidesheet} />
      </Box>
      {children}
    </Drawer>
  );
}
