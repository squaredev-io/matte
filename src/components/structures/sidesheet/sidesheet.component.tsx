import React, { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { X } from 'react-feather';
import { IconButton } from '../../inputs/button/button.component';
import styles from './sidesheet.module.scss';

export interface SidesheetProps {
  /**
   * The content of the sidebar
   */
  children: React.ReactNode;
  /**
   * Whether sidesheet should be open
   */
  open: boolean;
  /**
   * Sidesheet's title
   */
  title?: string;
  /**
   * Function that toggles sidesheet visibility
   */
  toggleSidesheet(event: React.MouseEvent<HTMLButtonElement>): void;
}

/**
 * Actions area for card
 * @param children The contents of the component
 */
export const SidesheetActions: FC = ({ children }) => {
  return (
    <Box
      className={styles.actions}
      display="flex"
      justifyContent="flex-end"
      px={2}
      py={1}
    >
      {children}
    </Box>
  );
};
/**
 * Main body of the card
 * @param children The contents of the component
 */
export const SidesheetBody: FC = ({ children }) => (
  <Box flexGrow={1} p={2}>
    {children}
  </Box>
);

export const SidesheetHeader: FC = ({ children }) => {
  const text = React.Children.toArray(children)?.find(
    ({ type }: any) => type === 'span'
  );

  const icon = React.Children.toArray(children)?.find(
    ({ type }: any) => type === IconButton
  );

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Typography className={styles.header} component="h6">
        {text}
      </Typography>
      {icon}
    </Box>
  );
};

export const Sidesheet: FC<SidesheetProps> = ({
  children,
  open,
  title,
  toggleSidesheet,
}) => {
  return (
    <Drawer
      anchor="right"
      classes={{
        paperAnchorRight: styles.paperAnchorRight,
      }}
      elevation={0}
      open={open}
      onClose={toggleSidesheet}
    >
      <Box display="flex" justifyContent="space-between" p={2}>
        <Typography className={styles.header} component="h6">
          {title}
        </Typography>
        <IconButton icon={<X />} onClick={toggleSidesheet} />
      </Box>
      {children}
    </Drawer>
  );
};
