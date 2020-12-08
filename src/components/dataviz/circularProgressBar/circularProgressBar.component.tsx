import React, { FC } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useTheme } from '@material-ui/core/styles'
import { Palette } from '@material-ui/core/styles/createPalette'

export interface CircularProgressBarProps {
  /**
   * The percentage of completion.
   */
  percentage: number
}

const Separators = ({ count }: any) => {
  const turns = 1 / count
  const range = [[count].keys()]

  return (
    <>
      {range.map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            height: '100%',
            transform: `rotate(${index * turns}turn)`,
          }}
        >
          <div
            style={{
              background: '#fff',
              width: '2px',
              // This needs to be equal to or greater than props.strokeWidth
              height: `${12}%`,
            }}
          />
        </div>
      ))}
    </>
  )
}

/**
 * Utility to return orange, green or red, depending on percentage
 * @param percentage The percentage of the completion
 * @param palette The MUI theme palette
 */
const getStrokeColor = (percentage: number, palette: Palette) => {
  if (percentage < 40) {
    return palette.error.main
  }
  if (percentage > 60) {
    return palette.success.main
  }
  return palette.warning.light
}

/**
 * Use a circular progress bar when you need to display progress with a circular bar, good for scores and gauges.
 */
export const CircularProgressBar: FC<CircularProgressBarProps> = ({
  percentage,
}) => {
  const { palette } = useTheme()

  const styles = {
    root: {},
    path: {
      stroke: getStrokeColor(percentage, palette),
      strokeLinecap: 'butt',
      transition: 'stroke-dashoffset 0.5s ease 0s',
    },
    trail: {
      stroke: '#d6d6d6',
      strokeLinecap: 'butt',
    },
    text: {
      fill: 'black',
      fontSize: 24,
      fontWeight: 500,
    },
  }

  return (
    <CircularProgressbarWithChildren
      // @ts-ignore // It's needed here because the component expects strokeLinecap, but the right CSS property is strokeLineCap
      styles={styles}
      value={percentage}
      text={`${percentage}`}
      strokeWidth={12}
    >
      <Separators count={36} />
    </CircularProgressbarWithChildren>
  )
}
