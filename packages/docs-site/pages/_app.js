import 'nextra-theme-docs/style.css'
import 'tailwindcss/tailwind.css'; /** TODO: Verify tailwind implementation */

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
