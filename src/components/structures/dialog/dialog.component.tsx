import React, { FC } from 'react';
import styles from './dialog.module.scss';

import {
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';

export interface DialogProps {
  /**
   * The content of the dialog
   */
  children: React.ReactNode;
  /**
   * Whether dialog should be open
   */
  open: boolean;
  /**
   * Dialog's title
   */
  title?: string;
  /**
   * Function that toggles dialog visibility
   */
  toggleDialog(event: React.MouseEvent<HTMLButtonElement>): void;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown?: boolean;
}

/**
 * Actions area for dialog, usually buttons
 * @param children The contents of the component
 */
export const DialogActions: FC = ({ children }) => {
  return (
    <MuiDialogActions className={styles.actions}>{children}</MuiDialogActions>
  );
};
/**
 * Main body of the dialog
 * @param children The contents of the component
 */
export const DialogBody: FC = ({ children }) => (
  <Box flexGrow={1} p={2}>
    {children}
  </Box>
);

export const Dialog: FC<DialogProps> = ({
  children,
  open,
  title,
  toggleDialog,
  disableEscapeKeyDown = false,
}) => {
  /**
   * Sets to true when screen size is smaller than 600px
   */
  const fullScreen = useMediaQuery('(max-width:600px)');

  /**
   * The content of the dialog
   */
  const body = React.Children.toArray(children)?.find(
    ({ type }: any) => type === DialogBody
  );

  /**
   * Actions area
   */
  const actions = React.Children.toArray(children)?.find(
    ({ type }: any) => type === DialogActions
  );

  return (
    <MuiDialog
      open={open}
      onClose={toggleDialog}
      fullScreen={fullScreen}
      disableEscapeKeyDown={disableEscapeKeyDown}
    >
      <div className={styles.header}>
        <Typography className={styles.title} component="h6">
          {title}
        </Typography>
        <Box
          className={styles.close}
          onClick={toggleDialog}
          component="span"
          sx={{
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          &times;
        </Box>
      </div>
      {body}
      {actions}
    </MuiDialog>
  );
};
