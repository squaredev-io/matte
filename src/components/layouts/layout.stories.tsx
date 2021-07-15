import React from 'react';
import { Layout } from './layout.component';
import { Typography } from '@material-ui/core';
import { Home, Columns, Shield, Settings, Book } from 'react-feather';

export default {
  title: 'Components/Structures/Layout',
  component: Layout,
  parameters: {
    componentSubtitle:
      'Buttons like to be pressed. So use them to allow users to take actions with a single tap.',
  },
};

const menuItems = [
  {
    icon: <Home />,
    primary: 'Overview',
    to: 'infinity and beyond!',
  },
  {
    primary: 'Products',
    header: true,
  },
  {
    icon: <Columns />,
    primary: 'Awesome product 1',
    to: 'infinity and beyond!',
  },
  {
    icon: <Shield />,
    primary: 'Awesome product 2',
    to: 'infinity and beyond!',
  },
  {
    primary: 'Account',
    header: true,
  },
  {
    icon: <Settings />,
    primary: 'Settings',
    to: 'infinity and beyond!',
  },
  {
    icon: <Book />,
    primary: 'API docs',
    to: 'infinity and beyond!',
  },
];

export const BasicLayout = () => (
  <div>
    <Layout menuItems={menuItems} logo="images/matte-logo-storybook.png">
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </Layout>
  </div>
);
