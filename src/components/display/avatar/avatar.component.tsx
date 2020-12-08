import React, { FC } from 'react'
import {
  Avatar as MuiAvatar,
  makeStyles,
  createStyles,
} from '@material-ui/core'

export type AvatarVariant = 'rounded' | 'square' | 'circular' | undefined

export interface AvatarProps {
  /**
   * The `alt` attribute for the `img` element.
   */
  alt?: string
  /**
   * Text to be shown inside the Avatar if src is not set. It can be an element, or just a string.
   */
  children?: React.ReactNode
  /**
   * The 'src' attribute for the 'img' element.
   */
  src?: string
  /**
   * The variant to use.
   */
  variant?: AvatarVariant
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontSize: '1rem',
    },
  })
)

/**
 * An avatar is an image or a graphic associated with a user or a brand.
 */
export const Avatar: FC<AvatarProps> = ({
  alt,
  children,
  src,
  variant = 'circular',
}) => {
  const classes = useStyles()

  return (
    <MuiAvatar alt={alt} className={classes.root} src={src} variant={variant}>
      {children}
    </MuiAvatar>
  )
}
