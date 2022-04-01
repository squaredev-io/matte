import React, { FC } from 'react';
import styles from './avatar.module.scss';
import { Avatar as MuiAvatar } from '@mui/material';

export type AvatarVariant = 'rounded' | 'square' | 'circular' | undefined;

export interface AvatarProps {
  /**
   * The `alt` attribute for the `img` element.
   */
  alt?: string;
  /**
   * Text to be shown inside the Avatar if src is not set. It can be an element, or just a string.
   */
  children?: React.ReactNode;
  /**
   * The 'src' attribute for the 'img' element.
   */
  src?: string;
  /**
   * The variant to use.
   */
  variant?: AvatarVariant;
}

/**
 * An avatar is an image or a graphic associated with a user or a brand.
 */
export const Avatar: FC<AvatarProps> = ({
  alt,
  children,
  src,
  variant = 'circular',
}) => {
  return (
    <MuiAvatar alt={alt} src={src} variant={variant} className={styles.avatar}>
      {children}
    </MuiAvatar>
  );
};
