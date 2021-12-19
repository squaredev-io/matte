import React, { FC } from 'react';
import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MuiCardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import styles from './card.module.scss';

export interface CardProps {
  /**
   * An 'Avatar' component. If set, the card header is shown with `title` and `subtitle`.
   */
  avatar?: React.ReactNode;
  /**
   * The `CardBody` and `CardActions` components.
   */
  children?: React.ReactNode;
  /**
   * If true, the left and right padding for the card content is removed.
   */
  disableGutters?: boolean;
  /**
   * If set, the card acts as button that follows this URL.
   */
  href?: string;
  /**
   * The 'src' attribute for the image to be displayed above content area.
   */
  image?: string;
  /**
   * Text for card's subtitle.
   */
  subtitle?: string;
  /**
   * Text for card's title.
   */
  title?: string;
}

/**
 * Actions area for card
 * @param children The contents of the component
 */
export const CardActions: FC = ({ children }) => (
  <MuiCardActions>{children}</MuiCardActions>
);

/**
 * Main body of the card
 * @param children The contents of the component
 * @param className The CSS class to pass to component
 */
export const CardBody: FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <Typography className={className} component="div" variant="body2">
    {children}
  </Typography>
);

/**
 * Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and
 * actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates
 * hierarchy.
 *
 * A `Card` may contain two optional components:
 *
 * - A `CardBody` component which contains wrapped content
 * - A `CardActions` component with elements for action, like buttons or icons
 */
export const Card: FC<CardProps> = ({
  avatar,
  children,
  href,
  image,
  subtitle,
  title,
  disableGutters = false,
}) => {
  // const classes = useStyles({ disableGutters });

  /**
   * Avatar component
   */
  const header = avatar && (
    <CardHeader
      avatar={avatar}
      className={styles.header}
      title={title}
      subheader={subtitle}
    />
  );
  /**
   * CardBody component if set
   */
  const body = React.Children.toArray(children)?.find(
    ({ type }: any) => type === CardBody
  );
  /**
   * CardActions component if set
   */
  const actions = React.Children.toArray(children)?.find(
    ({ type }: any) => type === CardActions
  );
  /**
   * Image part of the card
   */
  const media = image && (
    <CardMedia component="img" image={image} title={title} />
  );

  /**
   * Card's main content. Includes title, subtitle and the contents of CardBody
   */
  const content = (
    <>
      {media}
      <CardContent
        className={disableGutters ? styles.contentNoGutters : styles.content}
      >
        {!avatar && (
          <>
            {title && (
              <div
                className={clsx(styles.title, {
                  [styles.titleNoGutters]: disableGutters,
                })}
              >
                {title}
              </div>
            )}
            {subtitle && (
              <Box
                className={clsx(styles.subtitle, {
                  [styles.subtitleNoGutters]: disableGutters,
                })}
                sx={{
                  color: (theme) => theme.palette.grey[600],
                }}
              >
                {subtitle}
              </Box>
            )}
          </>
        )}
        {body}
      </CardContent>
    </>
  );

  return (
    <MuiCard className={styles.card}>
      {header}
      {href ? <CardActionArea href={href}>{content}</CardActionArea> : content}
      {actions}
    </MuiCard>
  );
};
