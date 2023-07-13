import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import {GoogleOAuthProvider} from "@react-oauth/google"
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'react-hot-toast'
export default function App({ Component, pageProps }: AppProps) {

  return (
  <div className={inter.className}>
    <GoogleOAuthProvider clientId='988755564798-ug7hc7mudj62it761bh9u8n3q9cr5gbr.apps.googleusercontent.com'>

    <Component {...pageProps} />
    <Toaster/>
    </GoogleOAuthProvider>
    </div>)
}
