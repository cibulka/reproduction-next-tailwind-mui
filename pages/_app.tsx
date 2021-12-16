import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import muiTheme from '../theme/mui';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp
