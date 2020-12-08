import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullscreen: false,

  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: true,

  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: false,

  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'bottom',

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,

  /**
   * show/hide tool bar
   * @type {Boolean}
   */
  isToolshown: false,

  /**
   * theme storybook, see link below
   */
  theme: theme,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedPanel: undefined,
});
