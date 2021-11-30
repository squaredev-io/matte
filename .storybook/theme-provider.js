import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { createMatteTheme } from '../src/components/utilities/createMatteTheme.component';

const theme = createMatteTheme();

const Theme = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default Theme;
