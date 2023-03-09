import type { AppProps } from 'next/app'
import { StGlobalStyle } from 'src/styles/globalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <StGlobalStyle />
    </>
  )
}
