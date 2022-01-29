import React, { FC, useState } from 'react';
import styles from './tabs.module.scss';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import clsx from 'clsx';

export type TabsVariant = 'fullWidth' | 'standard';

export interface TabProps {
  content: React.ReactNode;
  icon?: React.ReactElement;
  index: number;
  title: string;
}

export interface TabsProps {
  /**
   * CSS class name
   */
  className?: string;
  /**
   * An array of objects with the following properties:
   *
   * Name | Type | Description | Default
   * --- | --- | --- | ---
   * content | React.ReactNode | The content of the tab. It must be a React component. | -
   * icon | React.ReactElement | If set, an icon is showed before text. If both `avatar` and `icon` are set only `avatar` will be shown. | -
   * index | number | The index of the tab (starting from 0) | -
   * title | string | The title of the tab | -
   */
  tabs: TabProps[];
  /**
   * The variant of the `Tabs` component.
   * In `fullWidth` mode the tabs will take up all the available space.
   */
  variant?: TabsVariant;
}

/**
 * Tabs organize and allow navigation between groups of content that are related and at
 * the same level of hierarchy.
 */
export const Tabs: FC<TabsProps> = ({
  className,
  tabs,
  variant = 'standard',
}) => {
  // Handle ripple effect
  // Create a refs for a loop with a weak map
  // https://stackoverflow.com/a/62298989/4964370
  const rippleRefs = React.useRef(new WeakMap());

  const onRippleStart = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    rippleRefs.current.get(tabs[i]).start(e);
  };

  const onRippleStop = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    rippleRefs.current.get(tabs[i]).stop(e);
  };

  // Active state
  const [active, setActive] = useState(0);

  const handleClick = (i: number) => {
    setActive(i);
  };

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled
        className={clsx(className, styles.tabs, {
          [styles.tabsFullWidth]: variant === 'fullWidth',
        })}
      >
        {tabs.map((tab, i) => {
          return (
            <TabUnstyled
              key={i}
              component="span"
              onMouseDown={(e: any) => onRippleStart(e, i)}
              onMouseUp={(e: any) => onRippleStop(e, i)}
              className={clsx(styles.tab, {
                [styles.tabFullWidth]: variant === 'fullWidth',
                [styles.activeTab]: active === i,
              })}
              onClick={() => handleClick(i)}
            >
              <div className={styles.header}>
                {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
                {tab.title}
              </div>
              <TouchRipple
                ref={(el) => rippleRefs.current.set(tab, el)}
                center={false}
              />
            </TabUnstyled>
          );
        })}
      </TabsListUnstyled>
      {tabs.map((tab, i) => {
        return (
          <TabPanelUnstyled
            key={i}
            value={tab.index}
            className={styles.content}
          >
            {tab.content}
          </TabPanelUnstyled>
        );
      })}
    </TabsUnstyled>
  );
};
