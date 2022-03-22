import 'styles/variable.css'
import 'styles/base.css'
import 'styles/global.css'
import 'styles/cloud-animation.css'
import type { AppProps } from 'next/app'
import SpriteSVG from 'src/components/Sprite/SpriteSVG'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpriteSVG />
    </>
  )
}

export default MyApp
