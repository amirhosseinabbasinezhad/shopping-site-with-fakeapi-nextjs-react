import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import theme from "../components/theme/themes";
import Layout from "../components/Layout/Layout"

import { wrapper } from "../components/store/index";
import "../styles/LoginStyle.css";
import "../styles/singleproduct.css"
import "../styles/ProductsStyle.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp);
